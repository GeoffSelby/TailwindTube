import React, { useContext } from 'react';
import VideoContext from '../context/videos/videoContext';

const VideoItem = ({ video, closeList }) => {
  const videoContext = useContext(VideoContext);
  const { activeVideo, setActiveVideo } = videoContext;

  const isActive =
    activeVideo.contentDetails.videoId === video.contentDetails.videoId;

  const handleClick = () => {
    setActiveVideo(video);
    closeList();
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center px-4 py-4 rounded ${
        isActive
          ? 'bg-gray-800 cursor-default'
          : 'hover:bg-gray-800 cursor-pointer'
      }`}
    >
      <div>
        <svg
          className={`${
            isActive
              ? 'fill-current stroke-current text-indigo-600'
              : 'stroke-current text-gray-500'
          } w-2 h-2`}
          viewBox="0 0 21 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10.5"
            cy="10.5"
            r="9.5"
            fill={!isActive ? 'transparent' : ''}
          />
        </svg>
      </div>
      <span
        className={`ml-2 text-sm text-white ${isActive && 'font-semibold'}`}
      >
        {video.snippet.title}
      </span>
    </div>
  );
};

export default VideoItem;
