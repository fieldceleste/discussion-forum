export default (state = {}, action) => {
  const {username, post, upvotes, downvotes, timestamp, id} = action;
  switch(action.type){
    case "ADD_POST":
      return Object.assign({}, state, {
        [id]: {
          id: id,
          username: username,
          post: post,
          upvotes: 0,
          downvotes: 0,
          timestamp: timestamp
        }
      });

      case 'UPVOTE_POST':
        const newState = { ...state };
        let voteUp = newState[id].upvotes + 1;
      
        return Object.assign({} , state, {
          [id]:  {
            id: id,
            username: username,
            post: post,
            downvotes: downvotes,
            timestamp: timestamp,
            upvotes: voteUp
          },
        });
    
    default:
      return state;
  }
}

// Object.assign({}, state[id],