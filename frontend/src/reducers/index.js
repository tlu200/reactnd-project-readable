import { combineReducers } from 'redux';

import { categoryReducer } from './categoryReducer';
import { postReducer } from './postReducer';
import { commentReducer } from './commentReducer';
import { appStateReducer } from './appStateReducer';

export default combineReducers({
  categories: categoryReducer,
  posts: postReducer,
  comments: commentReducer,
  appState: appStateReducer
});