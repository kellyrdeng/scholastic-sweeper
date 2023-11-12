import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/imgs/logo.png'
export default function Header() {
  return (
    <div id="main_header" className="bg-stone-500 w-screen h-24">
        <nav id = "nav-set">
          <Link to="/tutorial">
          <img src={logo}/>
          </Link>
            <a class="font-mono ps-20 p-8 text-4xl" href="">About</a>
            <a class="font-mono ps-20 p-8 text-4xl" href="">Play</a> 
            <a class="font-mono ps-20 p-8 text-4xl" href="">Tutorial</a>
        </nav>   
    
    </div>

  )
}
