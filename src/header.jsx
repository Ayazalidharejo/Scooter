import React from 'react'
import './index.css';
import LOGO from "./images/logo.png"
import LOGOS from "./images/logos.png"
import benner from "./images/benner.png"



const Header = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg ">
  <div class="container d-flex align-items-center">
    <img src={LOGO} alt="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item home">
          <a class="nav-link active  " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active mx-4" href="#">Services</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link active mx-4" aria-current="page">Contact Us</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        
        <button class=" border-0 bg-transparent" type="submit">Login</button>
        <button class=" btn1 rounded-5 border-0 p-2 mx-3 btn-outline-success" type="submit">Book Scooter</button>
      </form>
    </div>
  </div>
</nav>
<div className='container'>
<div className='row d-flex align-items-center justify-content-between ' >
<div className='col-6 mt-5 position-relative'>
<p className='fs-1'>Fair price ride</p>
<h1>Rent our  <span className='coolor'>Scooter</span></h1>
<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
<img className='benner' src={benner} alt="" />
</div>
<div className='col-6'><img className='motor' src={LOGOS} alt="logo" /></div>
</div>
</div>
    </>
  )
}

export default Header