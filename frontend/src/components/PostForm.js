import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Button, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class PostFrom extends Component {
  render() {
    const { title, author, category, body, categories, handleChange, handleSave } = this.props;
    const enableButton = title && author && category && body;
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
                value={title} onChange={(e) => handleChange('title', e) }>
              </FormControl>
            </FormGroup>
            <FormGroup id="post-author">
              <ControlLabel>Author</ControlLabel>
              <FormControl
                type="text"
                label="Title"
                placeholder="Enter the post author"
                value={author}
                onChange={(e) => handleChange('author', e)}>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Category</ControlLabel>
              <FormControl componentClass="select"
                           value={category}
                           onChange={(e) => handleChange('category', e)}>
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
                           onChange={(e) => handleChange('body', e)}/>
            </FormGroup>
            <FormGroup>
              <Button
                      bsStyle="primary"
                      disabled={!enableButton}
                      onClick={() => enableButton ? handleSave() : null}>
                Save
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

export default connect(
  mapStateToProps
)(PostFrom);