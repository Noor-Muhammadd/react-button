import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Heading = () => {
  return (
    // Navbar section, no functionality added yet
    <div>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        className='px-4'
      >
        <Navbar.Brand href='#home'>Learn Online</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='/courses'>Courses</Nav.Link>
            <Nav.Link href='/categories'>Categories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Heading;
