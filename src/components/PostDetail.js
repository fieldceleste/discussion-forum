import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { mainPost, onClickingDelete } = props;
  return (
   
    <React.Fragment>
    <h2>Post Details</h2>
    <h2>{mainPost.username}</h2>
    <p>{mainPost.post}</p>
    <h5>{mainPost.timestamp}</h5>
    <p>UpVotes: {mainPost.upvotes}</p>
    <p>DownVotes: {mainPost.downvotes}</p>
    <button onClick={() => onClickingDelete(mainPost.id)}>Remove Post</button>
    <button onClick={ props.onClickingEdit }>Update Post</button>

    </React.Fragment>
  );
}

PostDetail.propTypes = {
  mainPost: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default PostDetail;