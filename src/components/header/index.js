import React from 'react';
import { Navbar, Button } from 'rbx';
import '../../styles/header.scss'

const Header = () => {

  return (
    <Navbar className='is-dark'>
      <Navbar.Brand>
        <Navbar.Item>
          <span>News</span>
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Segment align="start">
          <Navbar.Item>Home</Navbar.Item>
          <Navbar.Item>Documentation</Navbar.Item>

          <Navbar.Item dropdown>
            <Navbar.Link>More</Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item>About</Navbar.Item>
              <Navbar.Item>Jobs</Navbar.Item>
              <Navbar.Item>Contact</Navbar.Item>
              <Navbar.Divider />
              <Navbar.Item>Report an issue</Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Segment>

        <Navbar.Segment align="end">
          <Navbar.Item>
            <Button.Group>
              <Button color="primary">
                <strong>Sign up</strong>
              </Button>
              <Button color="light">Log in</Button>
            </Button.Group>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  )
}

export default Header;