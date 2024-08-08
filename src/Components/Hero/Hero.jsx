import React, { useEffect, useState } from 'react'
import '../Hero/Hero.css'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import my_profile from '../../assets/Gopan.png.jpg'
import { Link } from 'react-scroll';
export default function Hero() {
  
    const handleViewCV =()=>{
      window.open('/Gopan_av_profile_01.pdf')
    }
    const handleClickGit = () => {
      window.open('https://github.com/gopancoder', '_blank');
    };
    const handleClickLink = () => {
      window.open('https://www.linkedin.com/in/gopanav/', '_blank');
    };

    const [sticky,setSticky]=useState(false)
    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY >50 ? setSticky(true) : setSticky(false);
      })
    },[])
    

  return (
    <div className='hero'>
        <img className='profilepic' src={my_profile} alt="" />
        <div className="intro">
            <h3>Hello i'm</h3>
            <h1>Gopan A V</h1>
            <h2>Fullstack Developer</h2>
            <div className="contactcv">
                <button onClick={handleViewCV} className='cv'>View CV</button>
                <button className='cont'><Link to='hero' smooth={true} offset={2200} duration={500}>Contact</Link></button>
            </div>
            <div className="platforms">
                <button onClick={handleClickLink} className='plat'><img src={linkedin} alt="" /></button>
                <button onClick={handleClickGit} className='plat'><img src={github} alt="" /></button>
            </div>
        </div>
    </div>
  )
}
