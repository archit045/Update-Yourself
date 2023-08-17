import React from 'react'
import { Link } from 'react-router-dom'
import Image from './cart.jpg'
import Image1 from './Update-Yourself.png'
export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid"> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Items
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/mens">Mens Wear</Link></li>
                  <li><Link className="dropdown-item" to="/women">Womens Wear</Link></li>
                  <li><Link className="dropdown-item" to="/kids">Kids Wear</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
            <div className='navimg1'>
              <img src={Image1} alt='' className='navimg'></img>
              <h3><i>Update-Yourself</i></h3>
            </div>
            
            <div className='cart1'>
            <img src={ Image } alt='' className='cart'></img>
           </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
