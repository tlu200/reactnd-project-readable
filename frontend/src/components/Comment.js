import React from 'react';
import { connect } from 'react-redux';
import { appStateActions } from '../actions';
import { ListGroupItem, Badge } from 'react-bootstrap';

function Comment(props) {
  const { comment, openModal } = props;
  return (
    <ListGroupItem onClick={() => openModal(comment)}>
      <div>
        <strong>{comment.author}:</strong> {comment.body}
        <Badge pullRight={true}>{comment.voteScore}</Badge>
      </div>
    </ListGroupItem>
  );
}

function mapDispatchToProps (dispatch) {
  return {
    openModal: (comment) => dispatch(appStateActions.openCommentModal(comment)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Comment);