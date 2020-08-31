import { Request, Response } from 'express';
import db from '../database/connection';

export default class VideosController{
    async listVideos(req:Request, res:Response){           
        const categoryId = req.query.fk_categories_id;
        
        const videos = await db('db_videos')
            .where('fk_categories_id', '=', [categoryId]);
        
        return res.status(200).json(videos);
    }

    async createVideo(req:Request, res:Response){
        const {
            title,
            url,
            fk_categories_id
        } = req.body;

        const category =  await db('db_categories').where('id', '=', [fk_categories_id]);
        if(category == null || category.length == 0)
            return res.status(400).json({"message": "Invalid ID"});
             
        //Fazer o rollback das operações caso retornou erro em alguma inserção
        const trx = await db.transaction();

        try
        {

            const insertedVideo = await trx('db_videos').insert({
                title: title,
                url: url,
                fk_categories_id: fk_categories_id
            });

            await trx.commit();
        
            return res.status(201).json(insertedVideo);
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