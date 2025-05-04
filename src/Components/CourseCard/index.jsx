import "./index.css"
import Star from '../svg/Star'
import EmptyStar from "../svg/EmptyStar"

function CourseCard({ data }) {
  // Convert YouTube URL to embed format


  return (
    <div className="col-3" style={{ height: '265px', width: '302px' }}>
      <div style={{ border: '1px solid #ccc' }} className="brr">
        <div>

          <img src={data.suggested_youtube_video} style={{ height: '148px', width: '263px', borderRadius: '12px' }} />

        </div>

        {/* <Star Height={20} /> */}


        <div style={{ padding: "20px" }} >
          <h2 className="Heading-course">{data.title}</h2>
          <p className="text-style">{data.instructor}</p>
          {/* stars flock */}
          <div className="d-flex align-items-end">

            <div className="d-flex">
              {

                Array.from({ length: data.rating }, (_, i) => (
                  <div className="" style={{ margin: "1px" }}>
                    <Star key={i} Height={13} />
                  </div>

                ))}
            </div>
            <div className="d-flex" style={{ marginBottom: "-1px" }}>
              {

                Array.from({ length: 5 - data.rating }, (_, i) => (
                  <div style={{ margin: "2px" }}>
                    <EmptyStar key={i} Height={13} />
                  </div>

                ))}
            </div>
            <div className="div-style">({data.reviews})</div>
          </div>
          <p className="custom-style">${data.price}</p>



        </div>

      </div>
    </div>
  );
}

export default CourseCard;