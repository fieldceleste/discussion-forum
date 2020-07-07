import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import postListReducer from '../../reducers/post-list-reducer';

let store = createStore(rootReducer);


describe('indexReducer', () => {


  test('Should return default state if no action type is recognized', () => {
   expect (rootReducer({}, {type: null})).toEqual({
     masterPostList:{},
     formVisibleOnPage: false
    });
  });

  test('initial state of postListReducer matches root reducer', () => {
    expect(store.getState().masterPostList).toEqual(postListReducer(undefined, {type: null}))
  })

  test('initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, {type: null}))
  })
  
  
});