import '../Navbar/Navbar.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';

export default function Navbar() {
  const [sticky,setSticky]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY >50 ? setSticky(true) : setSticky(false);
    })
  },[])
  return (
    <div className='navbar'>
      <div className="my_name">
        <h1>Gopan A V</h1>
      </div>
      <div className="list">
        <ul>
            <li className='list1'><Link to='hero' smooth={true} offset={390} duration={500}>About</Link></li>
            <li className='list1'><Link to='hero' smooth={true} offset={960} duration={500}>Skills</Link></li>
            <li className='list1'><Link to='hero' smooth={true} offset={1600} duration={500}>Project</Link></li>
            <li className='list1'><Link to='hero' smooth={true} offset={2200} duration={500}>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}
