
import React from 'react';
import CustomButton from './Components/Buttons/index'
import TestimonalCard from "./Components/TestimonialCard/index"
import Footer from "./Components/FotterComp/Footer"

import LargeCourseCard from './Components/LargeCourseCard/index';
import CourseCardJson from './Json/CourseCard.json';
import LargeCourseCardJson from './Json/LargeCourseCard.json';
import Brands from "./Components/Brands/index"
import CourseContent from "./Components/CourseContent/index";
import LearnAnytime from "./Components/LearnAnytime"
import NavBar from "./Components/Creator/Components/Navbar/index"
import SideBar from "./Components/Creator/Components/Sidebar"
import Addcorce from "./Components/Creator/Components/AddCource"

function App() {

  return (
    <>
    {/* <pre>{JSON.stringify(LargeCourseCardJson[1].course_structure[0], null, 2)}</pre> */}

    


    {/* <CourseContent data={LargeCourseCardJson[0].course_structure[0]}/> */}
    {/* <LearnAnytime></LearnAnytime> */}
    {/* <NavBar></NavBar>
    <SideBar></SideBar> */}
    <Addcorce></Addcorce>

    </>
  )
}

export default App
