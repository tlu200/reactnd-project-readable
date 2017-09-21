import React from 'react';
import { ListGroupItem, Badge } from 'react-bootstrap';

function Comment(props) {
  const { comment } = props;
  return (
    <ListGroupItem>
      <div>
        <strong>{comment.author}:</strong> {comment.body}
        <Badge pullRight={true}>{comment.voteScore}</Badge>
      </div>
    </ListGroupItem>
  );
}

export default Comment;