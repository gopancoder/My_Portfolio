import React from 'react'
import '../Projects/Projects.css'
import project1 from '../../assets/project-1.1.png'
import project2 from '../../assets/project-2.2.png'
import project3 from '../../assets/project-3.3.png'
export default function Projects() {
  const handleClickproject1 = () => {
    window.open('https://github.com/gopancoder/room-rental-system', '_blank');
  };
  const handleClickproject2 = () => {
    window.open('https://github.com/gopancoder/Bus_Reservation_App', '_blank');
  };
  const handleClickproject3 = () => {
    window.open('https://github.com/gopancoder/Edusity_webpage', '_blank');
  };
  return (
    <div className='project'>
      <div className="project1">
        <img src={project1} alt="" /><br />
        <h3>Room Rentel System</h3>
        <button onClick={handleClickproject1}>Git hub</button>
      </div>
      <div className="project2">
        <img src={project2} alt="" /><br />
        <h3>Bus Reservation App</h3>
        <button onClick={handleClickproject2}>Git hub</button>
      </div>
      <div className="project3">
        <img src={project3} alt="" /><br />
        <h3>Edusity Webpage</h3>
        <button onClick={handleClickproject3}>Git hub</button>
      </div>
    </div>
  )
}
