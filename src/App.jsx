
import React from 'react';
import CustomButton from './Components/Buttons/index'
import TestimonalCard from "./Components/TestimonialCard/index"
import Footer from "./Components/FotterComp/Footer"
import LargeCourseCard from './Components/LargeCourseCard/index';
import CourseCardJson from './Json/Coursecard.json';
import LargeCourseCardJson from './Json/LargeCourseCard.json';
function App() {

  return (
    <>
      <p>{JSON.stringify(LargeCourseCardJson[0])}</p>
     <LargeCourseCard data={LargeCourseCardJson[0]} />
    </>
  )
}

export default App
