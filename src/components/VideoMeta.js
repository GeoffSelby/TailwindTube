import React, { useContext, useState, useEffect } from 'react';
import Moment from 'react-moment';
import VideoContext from '../context/videos/videoContext';
import youtube from '../api/youtube';

const VideoMeta = () => {
  const videoContext = useContext(VideoContext);
  const { activeVideo } = videoContext;

  useEffect(() => {
    getChannelTitle();
    // eslint-disable-next-line
  }, [activeVideo]);

  const [channelTitle, setChannelTitle] = useState('');

  const getChannelTitle = async () => {
    const response = await youtube.get('videos', {
      params: {
        part: 'snippet',
        key: process.env.REACT_APP_API_KEY,
        id: activeVideo.contentDetails.videoId,
      },
    });

    setChannelTitle(response.data.items[0].snippet.channelTitle);
  };

  return (
    <div className="container mx-auto px-6 xl:px-0">
      <div className="w-full lg:w-2/3">
        <h1 className="text-white font-semibold text-xl md:text-3xl">
          {activeVideo.snippet.title}
        </h1>
        <div className="mt-1 flex justify-between items-center">
          <span className="text-sm text-white">
            {channelTitle} &middot;{' '}
            <span className="text-xs text-gray-500">
              Published{' '}
              <Moment format="MMMM D, YYYY">
                {activeVideo.contentDetails.videoPublishedAt}
              </Moment>
            </span>
          </span>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-indigo-700 hover:bg-indigo-600 text-indigo-200 font-semibold text-sm py-2 px-4 rounded"
          >
            View Channel
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoMeta;
