import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavigationBar (props) {
  const { categories } = props;
  return (
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
  );
}

function mapStateToProps ({ categories }) {
  return { categories };
}

export default connect(
  mapStateToProps
)(NavigationBar);
