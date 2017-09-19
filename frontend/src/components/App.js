import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { categoriesActions, postsActions } from '../actions';
import PostList from './PostList';
import PostForm from './PostForm';

class App extends Component {
  componentDidMount () {
    const { getCategories, getPosts } = this.props;
    getCategories();
    getPosts();
  }

  render() {
    const { categories = [], posts = [] } = this.props;
    return (
      <BrowserRouter>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Readable</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                {categories.map((category) => {
                  return (
                    <LinkContainer to={`/category/${category.path}`} key={category.name}>
                      <NavItem>
                        {category.name}
                      </NavItem>
                    </LinkContainer>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" render={() => {
            return (
              <PostList posts={posts}></PostList>
            );
          }}/>

          {categories.map((category) => {
            return (
              <Route exact path={`/category/${category.path}`} key={category.name} render={() => {
                return (
                  <PostList posts={posts.filter((post) => post.category === category.name)}></PostList>
                );
              }}/>
            );
          })}

          <Route path="/new-post" render={() => {
            return (
              <PostForm></PostForm>
            );
          }}/>

        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps ({ categories, posts }) {
  return { categories, posts };
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: () => dispatch(categoriesActions.getCategories()),
    getPosts: () => dispatch(postsActions.getPosts()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
