import postListReducer from "../../reducers/post-list-reducer";


describe('postListReducer', () => {
  let action;
  
  const timestamp = Date.now();
  const formattedTime =  new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timestamp);
  const postData = {
    id: 1,
    username: "jhvozdovich",
    post: "I love cats!",
    upvotes: 0,
    downvotes: 0,
    timestamp: formattedTime
  }

  const currentState = {
    1: {
      id: 1,
    username: "jhvozdovich",
    post: "I love cats!",
    upvotes: 0,
    downvotes: 0,
    timestamp: formattedTime
  }
  }

  test('return default empty object if there is no action type passed', () => {
    expect(postListReducer({}, {type: null})).toEqual({});
  })

  test('add new post to masterPostList', () => {
    const {username, post, id} = postData;
    
    action = {
      id: id,
      type: "ADD_POST",
      username: username,
      post: post,
      upvotes: 0,
      downvotes: 0,
      timestamp: formattedTime
    }
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        id: id,
        username: username,
        post: post,
        upvotes: 0,
        downvotes: 0,
        timestamp: formattedTime
      }
    })
  })

  test('increment upvote on post', () => {
    const {username, post, upvotes, downvotes, timestamp, id} = postData;
    const newUpvotes = upvotes + 1;
    action = {
      type: "UPVOTE_POST",
      id: 1,
      username: username,
      post: post,
      upvotes: upvotes,
      downvotes: downvotes,
      timestamp: formattedTime
    }
    expect(postListReducer(currentState, action)).toEqual({
      [id] : {
        id: id,
        username: username,
        post: post,
        upvotes: newUpvotes,
        downvotes: downvotes,
        timestamp: formattedTime
      }
    })
  })

  test('increment downvote on post', () => {
    const {username, post, upvotes, downvotes, timestamp, id} = postData;
    const newDownvotes = downvotes - 1;
    action = {
      type: "DOWNVOTE_POST",
      id: 1,
      username: username,
      post: post,
      upvotes: upvotes,
      downvotes: downvotes,
      timestamp: formattedTime
    }
    expect(postListReducer(currentState, action)).toEqual({
      [id] : {
        id: id,
        username: username,
        post: post,
        upvotes: upvotes,
        downvotes: newDownvotes,
        timestamp: formattedTime
      }
    })
  })
})

