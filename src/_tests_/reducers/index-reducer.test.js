import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import postListReducer from '../../reducers/post-list-reducer';
import selectedPostReducer from '../../reducers/selected-post-reducer';
import * as a from './../../actions/index';

let store = createStore(rootReducer);


describe('indexReducer', () => {
  test('Should return default state if no action type is recognized', () => {
   expect (rootReducer({}, {type: null})).toEqual({
     masterPostList:{},
     formVisibleOnPage: false,
     selectedPost: null
    });
  });

  test('initial state of postListReducer matches root reducer', () => {
    expect(store.getState().masterPostList).toEqual(postListReducer(undefined, {type: null}))
  })

  test('initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, {type: null}))
  })

  test('initial state of selectedPostReducer matches root reducer', () => {
    expect(store.getState().selectedPost).toEqual(selectedPostReducer(undefined, {type: null}))
  })

  test("Check that initial state of postListReducer matches root reducer", () => {
    const timestamp = Date.now();
    const formattedTime =  new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timestamp);
     const action = a.addPost({
       username:'jhvozdovich',
       post: 'I love cats',
       upvotes: 0, 
       downvotes: 0,
       timestamp: formattedTime,
       id:1
     })
     store.dispatch(action);
     expect(store.getState().masterPostList).toEqual(postListReducer(undefined,action));
  });
  
  test('check that TOGGLE_FORM changes occur in formVisibleReducer and root reducer', () => {
    const action = a.toggleForm();
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('check that SELECT_POST changes occur in selectedPostReducer and root reducer', () => {
    const action = a.selectPost({
       username:'jhvozdovich',
       post: 'I love cats',
       upvotes: 0, 
       downvotes: 0,
       timestamp: "11:02",
       id:1
      })
    store.dispatch(action);
    expect(store.getState().selectedPost).toEqual(selectedPostReducer(undefined, action));
  });
});