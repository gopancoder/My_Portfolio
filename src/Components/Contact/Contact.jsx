import React from 'react'
import '../Contact/Contact.css'
import email_icon from '../../assets/email.png'
import phone_icon from '../../assets/phone-icon.png'

export default function Contact() {
  return (
    <div className='contact'>
      <h2><img className='icon' id='email' src={email_icon} alt="" />gopanav5@gmail.com</h2>
      <h2><img className='icon' src={phone_icon} alt="" />+91 9061238826</h2>
    </div>
  )
}
