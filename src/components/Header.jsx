import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Header() {

  //to access state useSelector hook is used
const wishList =useSelector((state)=>state.wishlistReducer)
//  console.log(wishList);
const cart =useSelector((state)=>state. cartReducer)

  return (
   
         <Navbar expand="lg" className="bg-primary  position-fixed  top-0 w-100" style={{zIndex:'1'}} >
    <Container>
      <Navbar.Brand href="#home" ><Link  to={'/'} style={{color:'white' , textDecoration:'none'}}><i class="fa-solid fa-cart-shopping fa-bounce me-3" ></i>E-CART</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border rounded me-5 mt-3 ' ><Link to={'/wishlist'} style={{color:'white' , textDecoration:'none'}}><i class="fa-solid fa-heart me-2" style={{color:'#e60a0a'}} ></i>WishList   <Badge bg="secondary">{wishList.length}</Badge></Link></Nav.Link>
          <Nav.Link className='btn border rounded me-5 mt-3' ><Link to={'/cart'} style={{color:'white' , textDecoration:'none'}}><i class="fa-solid fa-cart-shopping me-2" ></i>Cart <Badge bg="secondary">{cart.length}</Badge></Link></Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
}

export default Header