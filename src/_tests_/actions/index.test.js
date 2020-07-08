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
});