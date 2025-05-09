import React from 'react';
import './index.css';
import Logo from "../svg/Logo"; 
import CustomButton from '../Buttons';
import  Sketch from '../svg/sketch';
import Serach_icon from '../svg/search_icon';

function HomePage() {
  return (
    <>
      <div className='MainPage'>
        <div className='header'>
          <div className='heading-Tab'>
            {/* <div className='d-none d-md-block'>
              <Logo   />
            </div> */}
            {/* logo d-block d-md-none */}
            <div className=''>
              <Logo  />
            </div>
        
            <div className='header-content d-none d-md-flex align-items-center'>
  {/* <p className='header-passage mb-0'>Add Courses</p> */}
  {/* <div className='borderb mx-2'></div> */}
  {/* <p className='header-passagelogin mb-0 pr-3'>Login</p> */}
  <CustomButton
    label='Create Account'
    backgroundColor='#2563EB'
    color='#fff'
    radius='50px'
  />
</div>

{/* Shown only on small screens (mobile) */}
<div className='d-flex d-md-none justify-content-end'>
  <p className='header-passagelogin mb-0'>Login</p>
</div>
          </div>
          <div className='main'>
          <div className='content' >
            <p class="mx-sm-4 mx-md-0 ">Empower your future with the 
              courses designed to<span className='highlight'> fit your choice.
               
              </span>
               </p>
               <div className='sketch-underline'>
               <Sketch  />
               </div>
          </div>

          <div className='content-next d-none d-md-block '>
            <p>
            We bring together world-class instructors, interactive content, and a supportive
community to help you achieve your personal and professional goals.
               </p>
          </div>
          <div className='content-next d-md-none d-block'>
            <p>
            We bring together world-class instructors to help you achieve your personal and professional goals.
               </p>
          </div>
          
            <div className='searchbar'>
              <Serach_icon/>
              <input placeholder='Search for courses'></input>
              <CustomButton backgroundColor='#2563EB' color='#fff' radius='3px' label='Search' height='37px'/>
            </div>
            {/* <div className='searchbar d-flex align-items-center'>
  <input type='text' className='form-control' placeholder='Search for courses' />
  <Serach_icon />
  <CustomButton />
</div> */}
            </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
