import React, { useEffect, useState } from 'react'


import Button from 'react-bootstrap/Button';

import { addToCart, emptyCart, removeFromCart } from '../redux/slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';



function Cart() {


  const dispatch = useDispatch()
  const [total,setTotal ]=useState(0)
  const navigate =useNavigate()


  const cartArray = useSelector((state) => state.cartReducer)
  console.log(cartArray);



  //function to find the sum of given array
  const getTotal =()=>{
    // setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    if(cartArray.length>0){
    setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
  }
  else{
    setTotal(0)
  }
}
  console.log(total);

  useEffect (()=>{

    getTotal()
  },[cartArray])

  const handlecart = ()=>{
    alert('Thankyou .....Your Order Placed Successfully ....')
    dispatch(emptyCart())
    navigate('/')

  }
  

  return (

    <div style={{ marginTop: '100px' }}>
      { cartArray?.length > 0 ?
      <div className='row w-100'>
        
          <div className='col-lg-6 m-5'>
            <table className='table shadow border'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartArray?.map((item, index) => (<tr>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td><img style={{width:'100px' , height:'100px'}} src={item.thumbnail} alt="no image" /></td>
                    <td>₹{item.price}</td>
                    <td> <Button onClick={() => dispatch(removeFromCart(item.id))} variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
                    </td>
                  </tr>))
                }
              </tbody>
            </table>
          </div>
          <div className='col-lg-4 d-flex  justify-content-center align-items-center '>
            <div className=' border  shadow p-5'>
              <h3 className=' text-primary '>Cart Summary</h3>
              <h4>Total number of Products : <span className=' fw-bolder  fs-3  text-primary '>{cartArray.length}</span></h4>
              <h4>Price :<span className=' fw-bolder  fs-3  text-primary '>₹ {total}</span></h4>
              <button onClick={handlecart} className='btn btn-success rounded w-100 mt-3'>CheckOut</button>
            </div>
          </div>
          
          </div>: <div style={{ height: '100vh' }} className='d-flex justify-content-center  align-items-center  flex-column '>
            <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" height={'300px'} alt="no image" />
            <h3>Your Cart is Empty</h3>
            <button className='btn btn-success mt-2' ><Link to={"/"} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-arrow-left"></i>Back to Home</Link></button>
          
        
      
        
      </div>

              }

    </div>




  )
}

export default Cart