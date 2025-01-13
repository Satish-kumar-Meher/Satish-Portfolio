import React from 'react'
import "../App.css";
function Navbar() {
  return (
    <>
      {/* <!-- navbar --> */}
     <nav className="nav">
        <ul className="nav-list">
            <li className="active">
                <i className='bx bx-home'></i>
                <span className="tooltip">Home</span>
            </li>
            <li>
                <i className='bx bx-user' ></i>
                <span className="tooltip">About</span>
            </li>
            <li>
                <i className='bx bx-detail' ></i>
                <span className="tooltip">Resume</span>
            </li>
            <li>
                <i className='bx bx-briefcase' ></i>
                <span className="tooltip">Portfolio</span>
            </li>
            <li>
                <i className='bx bx-envelope' ></i>
                <span className="tooltip">Contact</span>
            </li>
        </ul>
     </nav>
     </>
  )
}

export default Navbar
