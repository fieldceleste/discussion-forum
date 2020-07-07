export default (state = {}, action) => {
  const {username, post, upvotes, downvotes, timestamp, id} = action;
  switch(action.type){
    case "ADD_POST":
      const currentTime = Date.now();
      const formattedTime =  new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(currentTime);
      
      return Object.assign({}, state, {
        [id]: {
          id: id,
          username: username,
          post: post,
          upvotes: 0,
          downvotes: 0,
          timestamp: formattedTime
        }
      });

      case 'UPVOTE_POST':
        const newUpvoteState = { ...state };
        let voteUp = newUpvoteState[id].upvotes + 1;
      
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
     case 'DOWNVOTE_POST':
       const newDownvoteState = { ...state };
       let voteDown = newDownvoteState[id].downvotes -1;

       return Object.assign({} , state, {
         [id]: {
           id: id,
           username: username,
           post: post,
           downvotes: voteDown,
           timestamp: timestamp,
           upvotes: upvotes
          },
        });
      case 'DELETE_POST':
        const newState = { ...state };
        delete newState[id];
        return newState;

    default:
      return state;
  }
};

