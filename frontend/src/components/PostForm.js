import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Button, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import uuid from 'uuid';
import * as API from '../utils/api';
import { postsActions } from '../actions';

class PostFrom extends Component {
  state = {
    title: "",
    author: "",
    category: "",
    body: "",
    isSaving: false
  };

  handleChange(key, event) {
    this.setState({[key]: event.target.value});
  }

  handleSave() {
    const { title, author, category, body } = this.state;
    const { addPost } = this.props;
    const post = {
      id: uuid(),
      title,
      author,
      category,
      body,
      timestamp: Date.now()
    };
    this.setState({isSaving: true});
    API.addPost(post).then((post) => {
      this.setState({
        title: "",
        author: "",
        category: "",
        body: "",
        isSaving: false
      });
      addPost(post);
    });
  }

  render() {
    const { categories } = this.props;
    const { title, author, category, body, isSaving } = this.state;
    const enableButton = title && author && category && body && !isSaving;
    return (
      <Grid>
        <Row>
          <Form>
            <FormGroup id="post-title">
              <ControlLabel>Title</ControlLabel>
              <FormControl
                type="text"
                label="Title"
                placeholder="Enter the post title"
                value={title} onChange={(e) => this.handleChange('title', e) }>
              </FormControl>
            </FormGroup>
            <FormGroup id="post-author">
              <ControlLabel>Author</ControlLabel>
              <FormControl
                type="text"
                label="Title"
                placeholder="Enter the post author"
                value={author}
                onChange={(e) => this.handleChange('author', e)}>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Category</ControlLabel>
              <FormControl componentClass="select"
                           value={category}
                           onChange={(e) => this.handleChange('category', e)}>
                <option value="" disabled>select category</option>
                {categories.map((category) => {
                  return (
                    <option value={category.name} key={category.name}>{category.name}</option>
                  );
                })}
              </FormControl>
            </FormGroup>
            <FormGroup controlId="post-body">
              <ControlLabel>Body</ControlLabel>
              <FormControl componentClass="textarea"
                           placeholder="textarea"
                           rows="10"
                           value={body}
                           onChange={(e) => this.handleChange('body', e)}/>
            </FormGroup>
            <FormGroup>
              <Button
                      bsStyle="primary"
                      disabled={!enableButton}
                      onClick={() => enableButton ? this.handleSave() : null}>
                {isSaving ? "Saving..." : "Save"}
              </Button>
            </FormGroup>
          </Form>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps ({ categories }) {
  return { categories };
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (data) => dispatch(postsActions.addPost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostFrom);