import React, { Component } from 'react';
import { Grid, Row, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
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
        <Row>
          <LinkContainer to='/new-post'>
            <Button bsStyle="primary">Add new post</Button>
          </LinkContainer>
        </Row>
      </Grid>
    );
  }
}

export default PostList;