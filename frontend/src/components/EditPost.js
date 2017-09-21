import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as API from '../utils/api';
import { postsActions } from '../actions';
import PostFrom from './PostForm';

class EditPost extends Component {
  constructor(props) {
    super(props);
    const postId = props.match.params.postId;
    const post = props.posts.find((post) => post.id === postId);

    if(post) {
      this.state = {
        id: postId,
        title: post.title,
        author: post.author,
        category: post.category,
        body: post.body,
        isSaving: false,
        postNotFound: false
      };
    } else {
      this.state = {
        postNotFound: true
      }
    }
  }

  componentDidMount () {
    const postId = this.props.match.params.postId;
    if(this.state.postNotFound) {
      API.getPost(postId).then((response) => {
        if(response.id) {
          const { id, title, author, category, body } = response;
          this.setState({
            id,
            title,
            author,
            category,
            body,
            postNotFound: false
          })
        }
      })
    }
  }

  handleChange(key, event) {
    this.setState({[key]: event.target.value});
  }

  handleSave() {
    const { id, title, author, category, body } = this.state;
    const { editPost } = this.props;
    const changes = {
      title,
      author,
      category,
      body
    };
    this.setState({isSaving: true});
    API.editPost(id, changes).then((post) => {
      const { id, title, author, category, body } = post;
      this.setState({
        id,
        title,
        author,
        category,
        body,
        isSaving: false
      });
      editPost(id, {
        title,
        author,
        category,
        body
      });
    });
  }

  render() {
    const { title, author, category, body, isSaving, postNotFound } = this.state;
    if (postNotFound) {
      return (<div>Post not found</div>);
    }
    return (
      <PostFrom title={title}
                author={author}
                category={category}
                body={body}
                isSaving={isSaving}
                handleChange={this.handleChange.bind(this)}
                handleSave={this.handleSave.bind(this)}>
      </PostFrom>
    );
  }
}

function mapStateToProps ({ posts }) {
  return { posts };
}

function mapDispatchToProps (dispatch) {
  return {
    editPost: (id, changes) => dispatch(postsActions.editPost(id, changes))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost);