import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";



export default function Navbar(props) {
  return (
    <> 
<nav className={`navbar  navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="title navbar-brand" href="#">{props.title}</a>

   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="  navbar-nav  me-auto mb-2 mb-lg-0">
        <li className="nav-item">
       
          {/* <Link className="list nav-link " aria-current="page" to="/home">Home</Link> */}
            <a className="list nav-link " aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">

       
          {/* <Link className="list nav-link" to="/about">About us</Link> */}
          
          <a className="list nav-link" href="/about">About us</a>
        </li>
      
        <li className="nav-item">
        
          {/* <Link className="list nav-link " aria-disabled="true" to="/help me" >Help me</Link> */}
            <a className="list nav-link " aria-disabled="true" href="/help me" >Help me</a>
        </li>
      </ul>

      <form className="d-flex" role="search">
        <input className=" search form-control me-2" type="search" placeholder="Search Anything Free" aria-label="Search"/>
        <button className="btn btn-outline-success" id="searchbtn" type="submit">Search</button>

        
       <div className={`form-check form-switch text-${props.mode === "light"? "dark":"light"} fs-6 gap-2 border border-${props.mode === "light"? "dark":"light"}`}  id="modecheck">
  <input className="form-check-input" type="checkbox" onClick={props.togglemode}role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">{props.data}</label>
</div>
      </form>
    </div>
  </div>
</nav>

</>
  )
}

Navbar.propTypes = {
   title:  PropTypes.string.isRequired,
   helpMe: PropTypes.string,
   Home: PropTypes.string
}
