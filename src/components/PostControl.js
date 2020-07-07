import React from 'react';
import NewPostForm from './NewPost';
import PostList from './PostList';
import PostDetail from './ PostDetail';
import  { connect } from 'react-redux';
import PropTypes from "prop-types";



function PostControl(props) {
  const {} = props;
}

PostControl.propTypes = {
  masterPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

PostControl = connect(mapStateToProps)(PostControl);
export default PostControl;