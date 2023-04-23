import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../css/navbar.module.css'


const NavBar = () => {
  return (
    <>
    <Navbar className={styles.navbar}>
        <Container>
            <Navbar.Brand href="#" className='text-muted'>Home</Navbar.Brand>
        </Container>
    </Navbar>

    </>
  )
}

export default NavBar;