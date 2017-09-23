import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import uuid from 'uuid';
import * as appStateActions from '../actions/appState';
import * as commentsActions from '../actions/comments';

class CommentModal extends Component {
  handleSave() {
    const { appState = {}, editComment, addComment, closeCommentModal } = this.props;
    const { commentFormAuthor, commentFormBody, commentFormId, commentFormParentId } = appState;
    if (commentFormId) {
      editComment(commentFormId, { author: commentFormAuthor, body: commentFormBody });
    } else {
      addComment({
        id: uuid(),
        author: commentFormAuthor,
        body: commentFormBody,
        timestamp: Date.now(),
        parentId: commentFormParentId
      });
      closeCommentModal();
    }
  }

  render () {
    const { appState, closeCommentModal, setCommentFormAuthor, setCommentFormBody } = this.props;
    const { commentFormAuthor, commentFormBody } = appState;
    const enableButton = commentFormAuthor && commentFormBody;

    return (
      <Modal show={appState.showCommentModal} onHide={closeCommentModal}>
        <Modal.Header closeButton>
          <Modal.Title>Comment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <FormGroup id="comment-author">
              <ControlLabel>Author</ControlLabel>
              <FormControl
                type="text"
                label="Author"
                placeholder="Enter the comment author"
                value={commentFormAuthor} onChange={(e) => setCommentFormAuthor(e.target.value)}>
              </FormControl>
            </FormGroup>
            <FormGroup id="comment-body">
              <ControlLabel>Body</ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Enter the comment body"
                value={commentFormBody} onChange={(e) => setCommentFormBody(e.target.value)}>
              </FormControl>
            </FormGroup>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button bsStyle="primary"
                  onClick={() => this.handleSave()}
                  disabled={!enableButton}>
            Save
          </Button>
          <Button bsStyle="primary"
                  onClick={closeCommentModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps ({ appState, comments }) {
  return { appState, comments };
}

export default connect(
  mapStateToProps,
  { ...appStateActions, ...commentsActions }
)(CommentModal);
