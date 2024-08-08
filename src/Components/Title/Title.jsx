import React from 'react'
import '../Title/Title.css'
export default function ({subTitle,title}) {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}
