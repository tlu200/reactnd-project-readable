import React, { Component } from 'react';
import { Row, Panel, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  };

  render() {
    const { post } = this.props;
    return (
      <Row>
        <Panel header={post.title} bsStyle="primary">
          {post.body}
          <Badge pullRight={true}>{post.voteScore}</Badge>
        </Panel>
      </Row>
    );
  }
}

export default Post;