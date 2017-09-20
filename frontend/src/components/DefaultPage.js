import React from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';

function DefaultPage (props) {
  return (
    <PostList posts={props.posts}></PostList>
  );
}

function mapStateToProps ({ posts }) {
  return { posts };
}


export default connect(
  mapStateToProps
)(DefaultPage);
