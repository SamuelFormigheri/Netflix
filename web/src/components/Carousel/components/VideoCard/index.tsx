import React from 'react';
import { Container } from './styles';

function getYouTubeId(youtubeURL : string) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

interface IVideoCard {
  videoTitle : string; 
  videoURL: string; 
  categoryColor: string;
}

function VideoCard({ videoTitle, videoURL, categoryColor } : IVideoCard) {
  const image : string = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <Container
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' , backgroundImage: `url(${image})`}}
      title={videoTitle}
    />
  );
}

export default VideoCard;
