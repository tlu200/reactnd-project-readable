import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Table, ButtonGroup, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { postsActions } from '../actions';
import * as API from '../utils/api';

const keys = ['id', 'timestamp', 'title', 'body', 'author', 'category', 'voteScore'];

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
    const { match } = this.props;
    const postId = match.params.postId;
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

    return (
      <Grid>
        {
          post ?
            <Row>
              <Table>
                <thead>
                <tr>
                  <th>#</th>
                  <th>value</th>
                </tr>
                </thead>
                <tbody>
                {keys.map((key) => {
                  return (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{key === 'timestamp'? new Date(post[key]).toISOString(): post[key]}</td>
                    </tr>
                  );
                })}
                </tbody>
              </Table>
              <ButtonGroup>
                <LinkContainer to={`/edit/${post.id}`}>
                  <Button bsStyle="primary">Edit</Button>
                </LinkContainer>
                <Button bsStyle="primary" onClick={() => this.deletePost()}>Delete</Button>
              </ButtonGroup>
            </Row> :
            <Row>
              No post found
            </Row>
        }
      </Grid>
    );
  }
}

function mapStateToProps ({ posts }) {
  return { posts };
}

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (id) => dispatch(postsActions.deletePost(id)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
