

import React from 'react'

import {NavLink} from 'react-router-dom'

const NavbarFood = () => {
  return (
   <>
   
        
        {/* NAVBAR STARTS  */}

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    {/* <a className="navbar-brand fw-bold text-danger" href="#">FOOD <span><i class="fa-solid fa-utensils"></i></span></a> */}
    <NavLink to={""}className="navbar-brand fw-bold">FOOD<span><i class="fa-solid fa-utensils"></i></span></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Morning</a> */}
          <NavLink to={"/"} className="nav-link active me-4" aria-current="page">Morning</NavLink>
        </li>

    

        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Afternoon</a> */}
          <NavLink to={"/afternoon"} className="nav-link active  me-4" aria-current="page">Afternoon</NavLink>
        </li>

        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Evening</a> */}
          <NavLink to={"/evening"} className="nav-link active  me-4" aria-current="page">Evening</NavLink>
        </li>

        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Night</a> */}
          <NavLink to={"/night"} className="nav-link active  me-4" aria-current="page">Night</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
  
</nav>





        {/* NAVBAR ENDS */}
   
   
   
   
   
   </>
  )
}

export default NavbarFood;