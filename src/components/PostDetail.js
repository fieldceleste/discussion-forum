import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post, onClickingDelete } = props;

  return (
    <React.Fragment>
    <h2>Post Details</h2>
    <h2>{props.username}</h2>
    <p>{props.post}</p>
    <h5>{props.timestamp}</h5>
    <p>UpVotes: {props.upvotes}</p>
    <p>DownVotes: {props.downvotes}</p>
    <button onClick={() => onClickingDelete(post.id)}>Remove Post</button>
    <button onClick={ props.onClickingEdit }>Update Post</button>

    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default PostDetail;