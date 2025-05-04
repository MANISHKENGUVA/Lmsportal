
import React from 'react';
import CustomButton from './Components/Buttons/index'
import TestimonalCard from "./Components/TestimonialCard/index"
import Footer from "./Components/FotterComp/Footer"

import LargeCourseCard from './Components/LargeCourseCard/index';
import CourseCardJson from './Json/CourseCard.json';
import LargeCourseCardJson from './Json/LargeCourseCard.json';
import Brands from "./Components/Brands/index"
import CourseContent from "./Components/CourseContent/index"

function App() {

  return (
    <>
    <pre>{JSON.stringify(LargeCourseCardJson[1].course_structure[0], null, 2)}</pre>

    


    <CourseContent data={LargeCourseCardJson[0].course_structure[0]}/>

    </>
  )
}

export default App
