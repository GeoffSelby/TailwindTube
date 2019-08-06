import React, { useContext, useState } from 'react';
import VideoContext from '../context/videos/videoContext';
import VideoItem from './VideoItem';

const VideosList = () => {
  const videoContext = useContext(VideoContext);
  const { videos, nextPageToken, loadMoreVideos } = videoContext;

  const [expanded, setExpanded] = useState(false);

  const expandList = () => {
    setExpanded(!expanded);
  };

  const closeList = () => {
    setExpanded(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="lg:pl-6 overflow-scroll h-full">
      <div
        onClick={expandList}
        className="lg:hidden flex justify-center items-center w-full p-4 bg-gray-800 hover:bg-gray-700 cursor-pointer"
      >
        <span className="text-sm">More Videos</span>
        <svg
          className="fill-current h-4 w-4 ml-1"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
      <div className={`${expanded ? 'block' : 'hidden'} lg:block`}>
        {videos.map(video => (
          <VideoItem
            key={video.contentDetails.videoId}
            video={video}
            closeList={closeList}
          />
        ))}
        {nextPageToken && (
          <button
            onClick={() => loadMoreVideos(nextPageToken)}
            className="mt-4 block mx-auto bg-gray-700 hover:bg-gray-600 text-gray-400 font-semibold text-sm py-2 px-4 rounded"
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default VideosList;
