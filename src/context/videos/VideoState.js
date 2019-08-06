import React, { useReducer } from 'react';
import youtube from '../../api/youtube';
import VideoContext from './videoContext';
import VideoReducer from './videoReducer';
import {
  LOAD_VIDEOS,
  LOAD_MORE_VIDEOS,
  SET_ACTIVE_VIDEO,
  SET_NEXT_PAGE_TOKEN,
} from '../types';

const VideoState = props => {
  const initialState = {
    loading: true,
    videos: null,
    activeVideo: null,
    nextPageToken: null,
  };

  const [state, dispatch] = useReducer(VideoReducer, initialState);

  // Get Initial Videos
  const getInitialVideos = async () => {
    try {
      const response = await youtube.get('playlistItems', {
        params: {
          part: 'snippet,contentDetails',
          maxResults: 25,
          key: process.env.REACT_APP_API_KEY,
          playlistId: process.env.REACT_APP_PLAYLIST_ID,
        },
      });
      dispatch({ type: SET_ACTIVE_VIDEO, payload: response.data.items[0] });
      dispatch({ type: LOAD_VIDEOS, payload: response.data.items });
      dispatch({
        type: SET_NEXT_PAGE_TOKEN,
        payload: response.data.nextPageToken,
      });
    } catch (err) {
      console.log('Uh oh!');
    }
  };

  const loadMoreVideos = async pageToken => {
    try {
      const response = await youtube.get('playlistItems', {
        params: {
          part: 'snippet,contentDetails',
          maxResults: 25,
          key: process.env.REACT_APP_API_KEY,
          pageToken: pageToken,
          playlistId: process.env.REACT_APP_PLAYLIST_ID,
        },
      });
      dispatch({ type: LOAD_MORE_VIDEOS, payload: response.data.items });
      dispatch({
        type: SET_NEXT_PAGE_TOKEN,
        payload: response.data.nextPageToken,
      });
    } catch (err) {
      console.log('Uh oh!');
    }
  };

  const setActiveVideo = video => {
    dispatch({ type: SET_ACTIVE_VIDEO, payload: video });
  };

  return (
    <VideoContext.Provider
      value={{
        loading: state.loading,
        videos: state.videos,
        activeVideo: state.activeVideo,
        nextPageToken: state.nextPageToken,
        getInitialVideos,
        loadMoreVideos,
        setActiveVideo,
      }}
    >
      {props.children}
    </VideoContext.Provider>
  );
};

export default VideoState;
