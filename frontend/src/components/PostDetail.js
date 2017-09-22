import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, ButtonGroup, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { postsActions, commentsActions } from '../actions';
import * as API from '../utils/api';
import PostDetailTable from './PostDetailTable';
import CommentList from './CommentList';

class PostDetail extends Component {
  constructor(props) {
    super(props);
    const { posts, match } = this.props;
    const post = posts.find((post) => {
      return post.id === match.params.postId;
    });
    this.state = {
      post: post
    }
  }

  componentDidMount () {
    const { match, getComments } = this.props;
    const postId = match.params.postId;
    getComments(postId);
    if(!this.state.post) {
      API.getPost(postId).then((response) => {
        if(response.id) {
          this.setState({ post: response });
        }
      })
    }
  }

  deletePost() {
    const { match, deletePost, history } = this.props;
    const postId = match.params.postId;
    if(postId) {
      API.deletePost(postId).then((post) => {
        deletePost(post.id);
        history.push("/");
      });
    }
  }

  render() {
    const { post } = this.state;

    if(post) {
      return (
        <Grid>
          <Row>
            <ButtonGroup>
              <LinkContainer to={`/edit/${post.id}`}>
                <Button bsStyle="primary">Edit</Button>
              </LinkContainer>
              <Button bsStyle="primary" onClick={() => this.deletePost()}>Delete</Button>
            </ButtonGroup>
          </Row>
          <Row>
            <PostDetailTable post={post} />
          </Row>
          <CommentList postId={post.id}/>
        </Grid>
      );
    }

    return (
      <Row>
        No post found
      </Row>
    );
  }
}

function mapStateToProps ({ posts }) {
  return { posts };
}

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (id) => dispatch(postsActions.deletePost(id)),
    getComments: (id) => dispatch(commentsActions.getCommentsByPost(id)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
