import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../redux/slice/wishlistSlice';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/slice/cartSlice';

function WishList() {
  const dispatch =useDispatch()
  const wishlistArray= useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

const handleWishlist =(item)=>{
  dispatch(addToCart(item))
  dispatch(removeFromWishlist(item. id))
}

  return (
    <div style={{marginTop:'150px' , marginBottom:'80px'}}>
      <Row className='ms-5 me-3 ' >
   {
   wishlistArray?.length>0?
    wishlistArray?.map((item)=>( <Col className=' mb-5' sm={12}  md={6} lg={4} xl={3}>
    <Card style={{ width: '18rem' ,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
      <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}}/>
      <Card.Body>
        <Card.Title>{item.title.slice(0,20)}...</Card.Title>
        <Card.Text>
         {item.description.slice(0,40)}...
         <p className=' fw-bolder  pt-2 '>Price: ₹{item.price}</p>
        </Card.Text>
        <div className='d-flex  justify-content-between  align-items-center '>
          <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
          <Button onClick={()=>handleWishlist(item)} variant="outline-success"><i class="fa-solid fa-cart-plus "></i></Button>
        </div>
      </Card.Body>
    </Card>
    </Col>))
  : <div style={{height:'100vh'}} className='d-flex justify-content-center  align-items-center  flex-column '>
    <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" height={'300px'} alt="no image" />
    <h3>Your Wishlist is Empty</h3>
    <button className='btn btn-success mt-2' ><Link to={"/"} style={{textDecoration:'none' , color:'white'}}><i class="fa-solid fa-arrow-left"></i>Back to Home</Link></button>
  </div>
  }
    </Row>
    </div>
  )
}

export default WishList