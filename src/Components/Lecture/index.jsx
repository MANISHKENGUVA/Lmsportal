import Play from "../svg/Play"


const Lecture = ({ title, duration, sendDataToParent }) => {
  const handleChange = (e) => {
   
    // Send data to parent on change
    sendDataToParent(title);
  };
    return (
      <div className="d-flex justify-content-between py-2 px-2 bg-gray-50 rounded-md">
        <div className="d-flex">

         <div className="mx-3" onClick={handleChange}>
            <Play height="20px" />

          </div>
       <div>
        <h4 className="text-medium-dark ">{title}</h4>

       </div>

        </div>

       <div>
        <span className="text-gray-500">{duration}</span>

       </div>
      </div>
    );
  };


  export default Lecture;