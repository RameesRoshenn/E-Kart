import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%' , height:'300px'}} className='d-flex justify-content-center align-w-100 flex-column bg-primary  text-light '>
    <div className="footer d-flex align-items-center justify-content-evenly">
      <div className="websites" style={{width:'400px'}}>
      
    <h3> <i class="fa-solid fa-cart-shopping" ></i>{' '} E-Cart</h3>

  <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Odio reiciendis praesentium nobis tenetur veritatis rerum, optio accusamus 
    nesciunt fugit quod at, asperiores est incidunt quae iste enim! Recusandae, officia rem?</h6>
    </div>

       
     <div className="links d-flex flex-column">
      <h4>Links</h4>
      <Link to={'./'} style={{textDecoration:'none',color:'white'}}>Home</Link>
      <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
      <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>WishList</Link>


       </div>
      
     <div className="guides d-flex flex-column"> 
      <h4>Guides</h4>
      <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>
      <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>React Bootstarp</Link>
      <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
     </div>

     <div className="contacts ">
      <h4 className='mb-3'>contacts us</h4>
      <div className= 'd-flex mb-3'>
        <input type="text" className='form-control' placeholder='enter your email id'/>
        <button className='btn btn-warning ms-2'>Subscribe</button>
      </div>

      <div className='d-flex justify-content-evenly align-items-center'>
      <Link to={'https://bootswatch.com'}style={{textDecoration:'none',color:'white',}}><i
      class="fa-brands fa-instagram fa-2x"></i></Link>

      <Link to={'https://bootswatch.com'}style={{textDecoration:'none',color:'white',}}><i
      class="fa-brands fa-twitter fa-2x"></i></Link>

      <Link to={'https://bootswatch.com'}style={{textDecoration:'none',color:'white',}}><i
      class="fa-brands fa-linkedin fa-2x"></i></Link>

      <Link to={'https://bootswatch.com'}style={{textDecoration:'none',color:'white',}}><i
      class="fa-brands fa-facebook fa-2x"></i></Link>








     


      </div>
     </div>
    

     
    </div>
    <p className=' mt-5  text-align-center justify-content-center d-flex'>Copyright © 2023 E-Cart . Built with React. </p>
  </div>
  )
}

export default Footer