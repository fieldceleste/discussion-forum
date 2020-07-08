import postListReducer from './post-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import selectedPostReducer from './selected-post-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterPostList: postListReducer,
  selectedPost: selectedPostReducer
});

export default rootReducer;