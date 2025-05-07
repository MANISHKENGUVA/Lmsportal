import React from 'react'
import './index.css'
import CustomButton from '../Buttons'
import ArrowIcon from '../svg/ArrowIcon'
export default function() {
  return (
    <>
        <div>
            <p className='mainHeading'>Learn anything, anytime, anywhere</p>
        </div>
        <div className='d-flex  flex-column justify-content-center align-items-center'>
            <p className='mainMatter'>Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
            <div className='d-flex justify-content-center align-items-center buttonclass'>
                <CustomButton label='Get Started' backgroundColor='rgba(2, 96, 255, 0.9)'
                color='#fff' radius='5px' height='32px'
                ></CustomButton>
                <div className='d-flex justify-content-center align-items-center' style={{paddingLeft:'15px'}}>
                    <div className='d-flex justify-content-center align-items-center'>
                        <p className='learnmore m-0 p-0'>Learnmore</p>
                    </div>
                    <div className='ms-1'>
                        <ArrowIcon></ArrowIcon>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
