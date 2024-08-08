import React from 'react'
import '../Skills/Skills.css'
import checkmark from '../../assets/checkmark.png'
export default function Skills() {
  return (
    <div className='skills'>
      <div className="frontend">
        <h1>Frontend Development</h1>
        <h2><img className='checkmarck-icon' src={checkmark} alt="" />HTML</h2>
        <h2><img className='checkmarck-icon' src={checkmark} alt="" />CSS</h2>
        <h2><img className='checkmarck-icon' src={checkmark} alt="" />Javascript</h2>
        <h2><img className='checkmarck-icon' src={checkmark} alt="" />React.js</h2>
      </div>
      <div className="backend">
        <h1>Backend Development</h1>
        <h2><img  className='checkmarck-icon' src={checkmark} alt="" />Java</h2>
        <h2><img className='checkmarck-icon' src={checkmark} alt="" />Spring boot</h2>
        <h2><img className='checkmarck-icon' src={checkmark} alt="" />Hibernate</h2>
        <h2><img className='checkmarck-icon' src={checkmark} alt="" />JDBC</h2>
      </div>
    </div>
  )
}
