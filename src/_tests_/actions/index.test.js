import * as actions from './../../actions/index';
import * as c from './../../actions/ActionTypes';

const timestamp = Date.now();
const formattedTime =  new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timestamp);

describe('discussion forum actions', () => {
  test('addPost should create ADD_POST action', () => {
    expect(actions.addPost({id: 1, username: "jhvozdovich", post: "I love cats!"})).toEqual({
      type: c.ADD_POST,
      id:1,
      username: "jhvozdovich",
      post: "I love cats!",
      upvotes: 0,
      downvotes: 0,
      timestamp: formattedTime
    });
  });
  test('voteUp should create UPVOTE_POST action', () => {
    expect(actions.voteUp({id: 1, username: "jhvozdovich", post: "I love cats!", upvotes: 7,downvotes: 12,timestamp: formattedTime})).toEqual({
      type: c.UPVOTE_POST,
      id:1,
      username: "jhvozdovich",
      post: "I love cats!",
      upvotes: 7,
      downvotes: 12,
      timestamp: formattedTime
    });
  });
  test('voteDown should create DOWNVOTE_POST action', () => {
    expect(actions.voteDown({id: 1, username: "jhvozdovich", post: "I love cats!", upvotes: 7,downvotes: 12,timestamp: formattedTime})).toEqual({
      type: c.DOWNVOTE_POST,
      id:1,
      username: "jhvozdovich",
      post: "I love cats!",
      upvotes: 7,
      downvotes: 12,
      timestamp: formattedTime
    });
  });
  test('deletePost should create DELETE_POST action', () => {
    expect(actions.deletePost(1)).toEqual({
      type: c.DELETE_POST,
      id: 1
    });
  });
  test('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    })
  })
  test('selectPost should create SELECT_POST action', () => {
    expect(actions.selectPost({id: 1, username: "jhvozdovich", post: "I love cats!", upvotes: 7,downvotes: 12,timestamp: formattedTime})).toEqual ({
      type: c.SELECT_POST,
      id:1,
      username: "jhvozdovich",
      post: "I love cats!",
      upvotes: 7,
      downvotes: 12,
      timestamp: formattedTime
    });
  });
});