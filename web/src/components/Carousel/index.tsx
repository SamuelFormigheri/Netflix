import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

interface IVideos {
  id: number;
  title: string;
  url: string;
}

interface ICategory{
  name : string
  color : string;
  description : string;
  videos : IVideos[];
}

interface IVideoCardGroup{
  ignoreFirstVideo? : boolean,
  category : ICategory;
}

function VideoCardGroup({
  ignoreFirstVideo,
  category
} : IVideoCardGroup) {
  const categoryTitle = category.name;
  const categoryColor = category.color;
  const categoryDescription = category.description;
  const videos = category.videos;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
            <Title style={{ color: categoryColor || 'green' }}>
              {categoryTitle}
            </Title>
              <ExtraLink href={""} target="_blank">
                {categoryDescription}  
              </ExtraLink>
            <div style={{ border: "1px solid "+ categoryColor, marginRight: "5vw", marginBottom: "15px", marginTop: "-10px"}}/>
        </>
      )}
      
      <Slider>       
        {videos.length > 0 && videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }
          return (
            <SliderItem key={video.id}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>    
  );
}

export default VideoCardGroup;
