import React from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';

function CategoryView (props) {
  const { posts, match } = props;
  const categoryPosts = posts.filter((post) => post.category === match.params.category);
  return (
    <PostList posts={categoryPosts}></PostList>
  );
}

function mapStateToProps ({ posts }) {
  return { posts };
}

export default connect(
  mapStateToProps
)(CategoryView);
