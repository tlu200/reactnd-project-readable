import React, { Component } from 'react';
import { Row, Panel, Badge, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  };

  render() {
    const { post } = this.props;
    return (
      <Row>
        <Panel header={post.title} bsStyle="primary">
          <div>
            {post.body}
            <Badge pullRight={true}>{post.voteScore}</Badge>
          </div>
          <hr/>

          <LinkContainer to={`/post/${post.id}`}>
            <Button bsStyle="primary">View detail</Button>
          </LinkContainer>
        </Panel>
      </Row>
    );
  }
}

export default Post;