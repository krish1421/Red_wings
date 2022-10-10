import React, { useState } from 'react';
import { Link } from 'react-router-dom';





export default function Home_one() {

    const Logout = () => {
        localStorage.clear()

    }
    
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/signup">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/signup" onClick={Logout}>logout</Link>
            </li>
            
           
          </ul>
        
        </div>
      </nav>
      <br></br>
      <div className='container'>
        <div className='row'>
        <div className='col-sm-6'>
        <button >tasks</button>
        </div>
        <div className='col-sm-6'>
        <button>Create new task</button>
        </div>
        </div>
        </div>


        </div>
        
        
    )
}