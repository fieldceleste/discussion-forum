import selectedPostReducer from '../../reducers/selected-post-reducer';

describe("selectedPostReducer", () => {
  let action;
  
  const timestamp = Date.now();
  const formattedTime =  new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timestamp);

  const currentState = {
      id: 1,
    username: "jhvozdovich",
    post: "I love cats!",
    upvotes: 0,
    downvotes: 0,
    timestamp: formattedTime
    }

  test("should return default without recognized action type", () => {
    expect(selectedPostReducer(null, {type:null})).toEqual(null)
  })

  test("should select post based on input", () => {
    action = {
      type: "SELECT_POST",
      id: 1,
      username: "jhvozdovich",
      post: "I love cats!",
      upvotes: 0,
      downvotes: 0,
      timestamp: formattedTime
    }
    expect(selectedPostReducer(null, action)).toEqual( {
       id: 1,
       username: "jhvozdovich",
       post: "I love cats!",
       upvotes: 0,
       downvotes: 0,
       timestamp: formattedTime
    })
  })

  test("should toggle off of selected post", () => {
    action = {
      type: "SELECT_POST"
    }
    expect(selectedPostReducer(currentState, action)).toEqual(null);
  })
})