import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import sortBy from 'sort-by';
import * as appStateActions from '../actions/appState';
import Post from './Post';

const sortByList = [{
  value: 'timestamp',
  text: 'Sort by time'
}, {
  value: 'title',
  text: 'Sort by title'
}, {
  value: 'voteScore',
  text: 'Sort by vote score'
}, {
  value: 'category',
  text: 'Sort by category name'
}, {
  value: 'author',
  text: 'Sort by author name'
}, {
  value: '-timestamp',
  text: 'Sort by time(reverse)'
}, {
  value: '-title',
  text: 'Sort by title(reverse)'
}, {
  value: '-voteScore',
  text: 'Sort by vote score(reverse)'
}, {
  value: '-category',
  text: 'Sort by category name(reverse)'
}, {
  value: '-author',
  text: 'Sort by author name(reverse)'
}];

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  };

  render() {
    const { posts, appState, setPostOrderBy } = this.props;
    return (
      <Grid>
        <Row>
          <Form inline>
            <FormGroup controlId="formControlsSelect" style={{marginBottom: '20px'}}>
              <ControlLabel>SortBy:</ControlLabel>
              <FormControl componentClass="select"
                           value={appState.postOrderBy}
                           onChange={(e) => {
                             setPostOrderBy(e.target.value)
                           }}>
                {sortByList.map((s, i) => {
                  return (
                    <option value={s.value} key={i}>{s.text}</option>
                  );
                })}
              </FormControl>
            </FormGroup>
          </Form>
        </Row>
        {posts.sort(sortBy(appState.postOrderBy)).map((post) => {
          return (
            <Post key={post.id} post={post}></Post>
          );
        })}
        <Row>
          <LinkContainer to='/new-post'>
            <Button bsStyle="primary">Add new post</Button>
          </LinkContainer>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps ({ appState }) {
  return { appState };
}

export default connect(
  mapStateToProps,
  appStateActions
)(PostList);
