import React from 'react'
import logo from '../assets/imgs/logo.png'
export default function Header() {
  return (
    <div id="main_header" className="bg-stone-500 w-screen h-24 fixed top-0">
        <nav id = "nav-set">
            <a class="no-underline w-64 h-full" href="/">
              <img className="h-full w-full" src={logo} />
            </a>
            <a class="font-mono ps-20 p-8 text-4xl" href="/about">About</a>
            <a class="font-mono ps-20 p-8 text-4xl" href="/play">Play</a> 
            <a class="font-mono ps-20 p-8 text-4xl" href="/tutorial">Tutorial</a>
        </nav>   
    
    </div>

  )
}
