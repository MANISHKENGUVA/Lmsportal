

import React, { useState, useRef } from 'react';
import Lecture from '../Lecture';
import Dropdown from '../svg/DropDown';
import DropUpIcon from '../svg/DropUp';

const CourseContent = ({ data }) => {
  const cc = useRef(''); // Persist cc across renders
  const [isOpen, setIsOpen] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0); // Dummy state to force re-render

  const toggleLectures = () => {
    setIsOpen(!isOpen);
    cc.curent=''
    
  };

  function getTotalSectionDuration(section) {
    return section.lectures.reduce((total, lecture) => {
      // Extract number from duration string (e.g., "10 mins" -> 10)
      const duration = parseInt(lecture.duration);
      return total + duration;
    }, 0);
  }

  // Callback to handle data from Lecture component
  const handleChildData = (childData) => {
    cc.current = childData; // Update cc with lecture title
    setForceUpdate((prev) => prev + 1); // Force re-render to update UI
    console.log('Selected Lecture:', cc.current); // For debugging
  };

  return (
    <div className="">
      <div
        className="d-flex justify-content-between"
        style={{
          backgroundColor: '#E3E3E3',
          padding: '20px 20px 10px 20px',
          border: '1px solid',
        }}
      >
        <div className="d-flex">
          <div className="mx-2">
            <div onClick={toggleLectures}>
              {isOpen ? (
                <DropUpIcon height="15px" width="15px" />
              ) : (
                <Dropdown height="15px" width="15px" />
              )}
              {/* Your conditional rendering */}
              {/* Your conditional rendering */}
              {cc.current == ''  ? '' : <p>{cc.current}</p>}
            </div>
          </div>

          <div>
            <h4 className="text-medium-dark">{data.section_title}</h4>
          </div>
        </div>

        <div className="d-flex">
          <h6 className="text-medium-dark mx-2">{data.lectures.length}</h6>
          <h6 className="text-medium-dark">Lectures</h6>
          <h2 className="text-medium-dark mx-1" style={{ marginTop: '-11px' }}>
            -
          </h2>
          <h6 className="text-medium-dark mx-1">{getTotalSectionDuration(data)}</h6>
          <h6 className="text-medium-dark mx-2">Minutes</h6>
        </div>
      </div>

      <div>
        {isOpen && (
          <div className="mt-3">
            {data.lectures.map((lecture, index) => (
              <Lecture
                sendDataToParent={handleChildData}
                key={index}
                title={lecture.lecture_title}
                duration={lecture.duration}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseContent;


// please do go the https://grok.com/share/bGVnYWN5_dd5bd938-26c8-46c0-8c1e-ca5a99d6f7bf






























// import React, { useState } from 'react';
// import Lecture from "../Lecture/index"
// import Dropdown from '../svg/DropDown';
// import DropUpIcon from '../svg/DropUp';


//   const CourseContent = ({ data }) => {
//     let cc ="" ;
//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggleLectures = () => {
//       setIsOpen(!isOpen);
//     };

//     function getTotalSectionDuration(section) {
//         return section.lectures.reduce((total, lecture) => {
//           // Extract number from duration string (e.g., "10 mins" -> 10)
//           const duration = parseInt(lecture.duration);
//           return total + duration;
//         }, 0);
//       }
//       const handleChildData = (childData) => {
//         cc = childData;
//       };
  
//     return (
//       <div className="">
//         {/* {course title section} */}


//       <div className='d-flex justify-content-between' style={{backgroundColor:"#E3E3E3",  padding: "20px 20px 10px 20px " ,border:" 1px solid "}}>
//         <div className='d-flex'>

//         <div className='mx-2'>

//         <div
//             onClick={toggleLectures}
          
           
//             >
//             {isOpen ? (
//                 <DropUpIcon height="15px" width="15px" />
//             ) : (
//                 <Dropdown height="15px" width="15px" />
//             )}

//             {isOpen ? (
//                ""
//             ) : (
//                <p>{cc}</p>
//             )}
//             </div>

            

//         {/* <button
//             type="button"
//             onClick={toggleLectures}
            
//                         >
//             {isOpen ? (
//                 <DropUpIcon height="15px" width="15px" />
//             ) : (
//                 <Dropdown height="15px" width="15px" />
//             )}
//             </button> */}
//         {/* {isOpen ? <Dropdown height="15px" width="15px" onClick={toggleLectures}/> :  <DropUpIcon height="15px" width="15px" onClick={toggleLectures}/>} */}
//            {/* / <Dropdown height="15px" width="15px"/>
//             <DropUpIcon height="15px" width="15px"/> */}

//         </div>

//         <div>
//         <h4 className="text-medium-dark">{data.section_title}</h4>


           

//         </div>

//         </div>

//         <div className='d-flex'> 
//         <h6 className="text-medium-dark mx-2">{data.lectures.length}</h6>
//         <h6 className="text-medium-dark ">Lectures</h6>
//         <h2 className="text-medium-dark mx-1" style={{marginTop:"-11px"}}>-</h2>
//         <h6 className="text-medium-dark mx-1">{getTotalSectionDuration(data)}</h6>
//         <h6 className="text-medium-dark mx-2">Minutes</h6>
        




           

//         </div>




         

       

//       </div>

//       <div>
//       {isOpen && (
//           <div className="mt-3">
//             {data.lectures.map((lecture, index) => (
//               <Lecture 
//               sendDataToParent={handleChildData}
//                 key={index}
//                 title={lecture.lecture_title}
//                 duration={lecture.duration}
//               />
//             ))}
//           </div>
//         )}
//       </div>


       
//       </div>
//     );
//   };

//   export default CourseContent;

//    {/* <div className="flex justify-between items-center">
//           <h2 className="text-xl font-semibold text-gray-800">{data.section_title}</h2>
//           <button
//             onClick={toggleLectures}
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//           >
//             {isOpen ? 'Hide' : 'Show'}
//           </button>
//         </div>
//         {isOpen && (
//           <div className="mt-4 space-y-2">
//             {data.lectures.map((lecture, index) => (
//               <Lecture
//                 key={index}
//                 title={lecture.lecture_title}
//                 duration={lecture.duration}
//               />
//             ))}
//           </div>
//         )} */}