import React from 'react'
import baseCell from "../assets/baseCell.svg";
import axios from "axios"

export default function Cell({value}) {
    const handleClick = async (event) => {
       await axios.post("http://localhost:3000/", {
        message: "I was clicked"
    })
    }
  return (
    <div className='relative' onClick={handleClick}>
        <img className="" src={baseCell} />
    </div>
  )
}
