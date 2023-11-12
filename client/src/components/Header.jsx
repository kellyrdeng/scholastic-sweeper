import React from 'react'
import logo from '../assets/imgs/logo.png'
export default function Header() {
  return (
    <div id="main_header" className="bg-stone-500 w-screen h-24 sticky top-0 z-50">
        <nav id="nav-set">
            <a class="no-underline p-2 w-80 h-auto" href="/">
              <img id="logo"className="" src={logo}/>
            </a>
            <a class="font-mono ps-20 p-8 text-4xl" href="/about">About</a>
            <a class="font-mono ps-20 p-8 text-4xl" href="/play">Play</a> 
            <a class="font-mono ps-20 p-8 text-4xl" href="/tutorial">Tutorial</a>
        </nav>   
    
    </div>

  )
}
