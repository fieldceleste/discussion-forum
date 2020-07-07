import postListReducer from './post-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterPostList: postListReducer
});

export default rootReducer;