import React, { useEffect, useState } from 'react';

//#region PAGES
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import LayoutShared from '../../components/LayoutShared';
//#endregion

import api from '../../services/api';

interface IVideos{
  id: number;
  title: string;
  url: string;
  fk_categories_id: number;
}

interface ICategoriesNestedVideos{
   id: number;
   name: string;
   description: string;
   color:string;
   videos: IVideos[];
} 

function Home() {
  const [initialValues, setInitialValues] = useState([]);

  //#region FUNCTIONS
  useEffect(()=>{
    api.get('categories-videos').then((categoriesWithVideos) => {
      setInitialValues(categoriesWithVideos.data);
    }).catch((err) => {
       console.log(err);
     });
  }, []);
  //#endregion

  return (
    <>
      <LayoutShared>
        {initialValues.length > 0 && initialValues.map((category: ICategoriesNestedVideos, indice) => {
          if (indice === 0) {
            return (
              <div key={category.id}>
                <BannerMain
                  videoTitle={category.videos[0].title}
                  url={category.videos[0].url}
                  videoDescription={category.videos[0].title}
                />
                <Carousel
                  ignoreFirstVideo
                  category={category}
                />
              </div>
            );
          }
          return (
            <Carousel
              key={category.id}
              category={category}
            />
          );
        })}
      
      </LayoutShared>
    </>
  );
}

export default Home;
