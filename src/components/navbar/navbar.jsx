import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              CRUD User
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                  <Link className="nav-link" to={'/'}>
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active"  to={'/users'}>
                    Users
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to={'/creat'}>
                    Create User
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    
    
    
        </>
      )
}
