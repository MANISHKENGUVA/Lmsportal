import React from 'react'
import "./index.css"
const index = () => {
  return (
    <>
        <div className='d-flex flex-column'>
            <label htmlFor="" className='label1'>Course Title</label>
            <input type="text" name="" id="" className='input1' placeholder='Course Title' />
        </div>
        <div className='d-flex flex-column'>
            <label htmlFor="" className='label1'>Course Heading</label>
            <input type="text" name="" id="" className='input1' placeholder='Course Heading' />
        </div>
        <div className='d-flex flex-column'>
            <label htmlFor="" className='label1'>Course Description</label>
            <input type="text" name="" id="" className='input2' placeholder='Course Description' />
        </div>
        <div className='d-flex flex-column'>
            <label htmlFor="" className='label1'>Course Price</label>
            <input type="email" name="" id="" className='input3' placeholder='Course Price' />
        </div>
    </>
  )
}

export default index