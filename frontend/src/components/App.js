import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Nav, Navbar, NavItem } from 'react-bootstrap';
import { categoriesActions, postsActions } from '../actions';
import * as API from '../utils/api';

class App extends Component {
  componentDidMount () {
    const { setCategories, setPosts } = this.props;
    API.getCategories().then((response) => {
      setCategories(response.categories);
    });
    API.getPosts().then((response) => {
      setPosts(response);
    });
  }

  render() {
    const { categories = [], posts = [] } = this.props;
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Readable</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {categories.map((category) => {
                return (
                  <NavItem key={category.name}>
                    {category.name}
                  </NavItem>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Grid>

          <Row>
            Posts:
            <ul>
              {posts.map((post) => {
                return <li key={post.id}>{post.title}</li>
              })}
            </ul>
          </Row>
          <Row>
            Categories:
            <ul>
              {categories.map((category, index) => {
                return <li key={index}>{category.name}</li>
              })}
            </ul>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps ({ categories, posts }) {
  return { categories, posts };
}

function mapDispatchToProps (dispatch) {
  return {
    setCategories: (data) => dispatch(categoriesActions.setCategories(data)),
    setPosts: (data) => dispatch(postsActions.setPosts(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
