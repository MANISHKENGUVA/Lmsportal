import "./index.css"
import Star from '../svg/Star'
import EmptyStar from "../svg/EmptyStar"
import TimerClock from "../svg/TimerClock";
import NoLineclock from "../svg/NoLineclock";
import Lesson from "../svg/Lessons";
import Button from "../Buttons/index"

function LargeCourseCard({ data }) {
  // Convert YouTube URL to embed format


  return (
    <div className=" shadow-sm" style={{ height: '684px', width: '424px' }}>
      <div style={{ height: '238px', width: '420px', borderRadius: '12px', border: '1px solid #ccc' }} className="brr">
        <div>

          <img src={data.suggested_youtube_video} style={{ height: '238px', width: '420px', borderRadius: '12px' }} />

        </div>
        

        {/* <Star Height={20} /> */}


        <div style={{ padding: "20px" }} >
           <div className="d-flex">
            <div className="ml-1">

           <TimerClock Height={16} width={13} />


            </div>
           
           <div class="offer-text">
            <span class="bold">5 days </span><span class="normal">left at this price!</span>
           </div>

           </div>
        
          <div className="d-flex my-2 ">
         
          <div class="Lcustom-style">${data.price}</div>

          <div class="strike-price">$19.99</div>
          <div class="discount-badge">50% off</div>

         

          
          </div>
          {/* rarig lwesson div */}

          <div className="d-flex my-2">
            <div className="d-flex">
              <div className="" style={{ margin: "1px" }}>
                      <Star  Height={18} />
              </div>
              <div class="rating-value">{data.rating}</div>
             

 
            </div>
            <div class="line-separator mx-1"></div>
            {/* {clock hourse} */}
            <div className="d-flex">
              <div className="" style={{ marginTop: "3px" }}>
                    <NoLineclock Height={16} Width={16}  />
              </div>
              <div class="rating-value">{data.rating}</div>
              <div class="rating-value">hours</div>


 
            </div>
            <div class="line-separator mx-1"></div>
             {/* lessons */}
             <div className="d-flex">
              <div className="" style={{ marginTop: "3px" }}>
                    <Lesson Height={16}   />
              </div>
              <div class="rating-value">54</div>
              <div class="rating-value">Lessons</div>
              

 
            </div>
           

           


          </div>

          {/* {buttons div} */}
          <div className="my-3">


          <Button
          height="45px"
          radius="10px"
          label="Enroll Now"
          backgroundColor="blue"
          color="#FFFFFF"
          />
          </div>

          <div class="course-heading">What's in the course?</div>
          
          {/* <pre>{JSON.stringify(data.course_structure, null, 2)}</pre> */}
            <ul>
          
              {data.course_structure.map((section, index) => (
           <li>  
             <div key={index}>
             <div class="course-description">
               {section.section_title}
             </div>
      
           </div>
           </li>
           
           
           
  ))}


            </ul>


        </div>

      </div>
    </div>
  );
}

export default LargeCourseCard;
