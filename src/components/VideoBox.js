import React, { useContext } from 'react';
import VideoContext from '../context/videos/videoContext';
import VideosList from './VideosList.js';

const VideoBox = () => {
  const videoContext = useContext(VideoContext);
  const { activeVideo } = videoContext;
  const videoSrc = `https://www.youtube.com/embed/${
    activeVideo.contentDetails.videoId
  }`;

  return (
    <div className="playlist mt-6 container mx-auto flex flex-col lg:flex-row justify-between px-6 xl:px-0">
      <div className="w-full lg:w-2/3">
        <div className="video--wrap">
          <iframe
            className="shadow-md"
            frameBorder="0"
            height="100%"
            width="100%"
            title="Video Player"
            src={videoSrc}
          />
        </div>
      </div>
      <div className="w-full lg:w-1/3">
        <VideosList />
      </div>
    </div>
  );
};

export default VideoBox;
