import {
  LOAD_VIDEOS,
  LOAD_MORE_VIDEOS,
  SET_ACTIVE_VIDEO,
  SET_NEXT_PAGE_TOKEN,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOAD_VIDEOS:
      return {
        ...state,
        loading: false,
        videos: action.payload,
      };
    case LOAD_MORE_VIDEOS:
      return {
        ...state,
        videos: [...state.videos, ...action.payload],
      };
    case SET_ACTIVE_VIDEO:
      return {
        ...state,
        activeVideo: action.payload,
      };
    case SET_NEXT_PAGE_TOKEN:
      return {
        ...state,
        nextPageToken: action.payload,
      };
    default:
      return state;
  }
};
