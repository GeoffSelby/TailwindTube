import React, { Fragment, useEffect, useContext } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import VideoContext from '../context/videos/videoContext';
import VideoMeta from '../components/VideoMeta';
import VideoBox from '../components/VideoBox';
import VideoDescription from '../components/VideoDescription';

const Home = () => {
  const videoContext = useContext(VideoContext);
  const { loading, getInitialVideos, activeVideo } = videoContext;

  useEffect(() => {
    getInitialVideos();
    // eslint-disable-next-line
  }, []);

  if (!loading) {
    return (
      <Fragment>
        <VideoMeta />
        <VideoBox />
        <VideoDescription description={activeVideo.snippet.description} />
      </Fragment>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-full">
      <Loader
        type="Plane"
        color="#4c51bf"
        secondaryColor="#a0aec0"
        height="100"
        width="100"
      />
    </div>
  );
};

export default Home;
