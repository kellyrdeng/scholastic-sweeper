import React from 'react'

export default function Header() {
  return (
    <div id="main_header" className="bg-stone-500 w-screen h-24">
        <nav id = "nav-set">
            <a className="ps-8 h-screen" img src="schol_logo.png"></a> 
            <a class="font-mono p-8 text-4xl" href="">About</a>
            <a class="font-mono p-8 text-4xl" href="">Play</a> 
            <a class="font-mono p-8 text-4xl" href="">Tutorial</a>
        </nav>   
    
    </div>

  )
}
