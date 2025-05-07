import React from 'react'
import "./index.css"
import Upload from '../../../svg/Upload'
import course1 from '../../../../assets/course_1.png'
const index = () => {
  return (
    <>
        <div className='d-flex flex-column' style={{paddingBottom:'18px'}}>
            <label htmlFor="" className='label1'>Course Title</label>
            <input type="text" name="" id="" className='input1' placeholder='Course Title' />
        </div>
        <div className='d-flex flex-column' style={{paddingBottom:'18px'}}>
            <label htmlFor="" className='label1'>Course Heading</label>
            <input type="text" name="" id="" className='input1' placeholder='Course Heading' />
        </div>
        <div className='d-flex flex-column' style={{paddingBottom:'18px'}}>
            <label htmlFor="" className='label1'>Course Description</label>
            <input type="text" name="" id="" className='input2' placeholder='Course Description' />
        </div>
        <div className='d-flex justify-content-between priceimg' style={{paddingBottom:'18px'}}>
            <div className='d-flex flex-column'>
                <label htmlFor="" className='label1'>Course Price</label>
                <input type="email" name="" id="" className='input3' placeholder='Course Price' />
            </div>
            <div className='d-flex justify-content-center align-items-center flex-column flex-md-row'>
                <p className='corcethumnail m-0'>Course Thumbnail</p>
                <div className='d-flex '>
                <Upload></Upload>
                <div className='imgupload'>
                    <img src={course1} alt="" width={64} height={36} />
                </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default index