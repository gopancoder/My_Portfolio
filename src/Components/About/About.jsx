import React from 'react'
import '../About/About.css'
import education_icon from '../../assets/experience.png'
import my_second_profile from '../../assets/my_second_profile.png'
export default function About() {
  return (
    <div className='about'>
        <img  className='sidephoto' src={my_second_profile} alt="" />
        <div className="details">
            <div className="education">
                <img className='education_icon' src={education_icon} alt="" />
                <h2>Education</h2>
                <h3>BSc in Computer science</h3>
                <h4>Kannur University</h4>
            </div>
            <div className="intro">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates eos iure harum magni, ipsa, nam aliquid deleniti nobis dignissimos maxime voluptate inventore eveniet perspiciatis et ducimus cupiditate tempora veniam?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quod ullam. Itaque explicabo et quam, earum necessitatibus iste possimus omnis exercitationem sit ex non quae similique alias ullam nam nostrum.
                </p>
            </div>
        </div>
    </div>
  )
}
