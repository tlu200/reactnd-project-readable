import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Post from './Post';

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  };

  render() {
    const { posts } = this.props;
    return (
      <Grid>
        {posts.map((post) => {
          return (
            <Post key={post.id} post={post}></Post>
          );
        })}
      </Grid>
    );
  }
}

export default PostList;