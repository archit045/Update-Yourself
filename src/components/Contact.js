import React from 'react'
import Image from './Update-Yourself.png'

export default function Contact() {
  return (
 <>
    <div className="cardcon">
  <img src={ Image } className="card-img-top" alt="..." id="image"/>
  <div className="card-body">
  </div>
</div>
<div>
  <br></br>
<h5 className="card-title1">Update-Yourself</h5>
<br></br>
<ul className='detail'>
        <li>
          <h6>Contact Number = 7868900000</h6>
          </li>
          <li>
          <h6> Email = updateyour@gmail.com</h6>
           </li>
           <li>
           <h6>Address = 455,Scheme No.45 Indore</h6>
           </li>
           <li>
           <h6>Company = Update-Yourself Pvt. ltd.</h6>
           </li>
      </ul>
      </div>
 </>
  )
}
