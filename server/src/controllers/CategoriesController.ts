import { Request, Response } from 'express';
import db from '../database/connection';
// const knexnest = require('knexnest');

interface IVideos{
   id?: number;
   title?: string;
   url?: string;
   fk_categories_id?: number;
}

interface ICategoriesNestedVideos{
    id?: number;
    name?: string;
    description?: string;
    color?:string;
    videos?: IVideos[];
}
export default class CategoriesController{
    async listCategories(req:Request, res:Response){       
        const categories = await db.select().table('db_categories');
        
        return res.status(200).json(categories);
    }

    async listCategoriesWithVideos(req:Request, res:Response){       
         const categoriesThatHasVideos : ICategoriesNestedVideos[] = await db.select('db_categories.*').from('db_categories')
                .whereExists(function(){
                        return this.select('db_videos.*')
                            .from('db_videos')
                            .whereRaw('`db_videos`.`fk_categories_id` = `db_categories`.`id`')
                });

        const categoriesWithVideos = categoriesThatHasVideos.map( async category =>{
            var videos = await db('db_videos').where('fk_categories_id', '=', [category.id]);
            return { id: category.id, name: category.name, description: category.description, color: category.color, videos: videos }; 
        });

        Promise.all(categoriesWithVideos).then((categories) => {           
            return res.status(200).json(categories);
        });
    }
    async createCategory(req:Request, res:Response){
        const {
            name,
            description,
            color
        } = req.body;

        //Fazer o rollback das operações caso retornou erro em alguma inserção
        const trx = await db.transaction();

        try
        {
            const insertedCategory = await trx('db_categories').insert({
                name: name,
                description: description,
                color: color
            });

            await trx.commit();
        
            return res.status(201).json(insertedCategory);
        }
        catch(err)
        {
            await trx.rollback();
            return res.status(400).json({
                error: err
            });
        }
    }
}