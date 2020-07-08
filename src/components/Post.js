import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      
      <h3>User-{props.username}</h3>
      <p className="time-stamp">{props.timestamp}</p>
      <br />
      <div className= "borderBox">
        <li className="paragraph">{props.post}</li>
      </div>
      <p>
        <img src= "./../heart.png" onClick = {() => props.whenUpvoteClicked(props)} className= "likeButton" type="submit"/>
        <span className = "counter"> {props.upvotes} </span>
        <img src="./../dislike.jpg" onClick = {() => props.whenDownvoteClicked(props)} className= "dislikeButton" type="submit" />
        <span className = "counter"> {props.downvotes} </span>
      </p>
      <button className="button btndetails" onClick = {() => props.whenPostClicked(props.id)} type="submit">View Details</button>
      <br />
      <br />
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

