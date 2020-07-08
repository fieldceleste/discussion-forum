import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { mainPost, onClickingDelete } = props;
  return (
 
    <React.Fragment>
    <hr /> 
    <h2><u>Post Details:</u></h2>
    <h2>User-{mainPost.username}</h2>
    <p className="time-stamp">{mainPost.timestamp}</p>
    <br />
    <div className= "borderBox">
    <li className="paragraph">{mainPost.post}</li>
    </div>
    <p>UpVotes: {mainPost.upvotes}</p>
    <p>DownVotes: {mainPost.downvotes}</p>
    <button className="button btnsubmit" onClick={() => onClickingDelete(mainPost.id)}>Remove Post</button>
    <br />
    </React.Fragment>
   
  );;
}

PostDetail.propTypes = {
  mainPost: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default PostDetail;