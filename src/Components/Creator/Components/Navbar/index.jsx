import React from 'react'
import "./index.css"
import Logo from './../../../svg/Logo'
import CustomButton from '../../../Buttons'
import UserIcon from '../../../svg/ProfileIcon'
const index = () => {
  return (
    <>
        <div className='heading-Tab'>
            <div className='logo'>
              <Logo Height={34} Width={115}/>
            </div>
            <div className='d-flex justify-content-center align-items-center header-content'>
                <p className='header-passage m-0 p-3'>Hi username</p>
                <div>
                    <UserIcon></UserIcon>
                </div>
            </div>
          </div>
    </>
  )
}

export default index