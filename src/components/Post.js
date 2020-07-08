import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <h2>{props.username}</h2>
      <p>{props.post}</p>
      <h5>{props.timestamp}</h5>
      <p>UpVotes: {props.upvotes}</p>
      <button onClick = {() => props.whenUpvoteClicked(props.id)} type="submit">Upvote</button>
      <p>DownVotes: {props.downvotes}</p>
      <button onClick = {() => props.whenDownvoteClicked(props.id)} type="submit">Downvote</button>
      <button onClick = {() => props.whenPostClicked(props.id)} type="submit">View Details</button>
    </React.Fragment>
  )
}

Post.propTypes = {
  username: PropTypes.string,
  post:PropTypes.string,
  timestamp: PropTypes.string,
  upvotes: PropTypes.number,
  downvotes:PropTypes.number,
  whenPostClicked: PropTypes.func,
  whenUpvoteClicked: PropTypes.func,
  whenDownvoteClicked: PropTypes.func
}

export default Post;