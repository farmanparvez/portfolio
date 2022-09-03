import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEducation } from "../../../Redux/actions/educationActions";
import { educationActions } from "../../../Redux/reducers/EducationReducer";
import { Row, Col } from "antd";

function Education() {
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, education } = useSelector(
    (state) => state.education
  );
  //   console.log(education);
  useEffect(() => {
    dispatch(getEducation());
  }, []);
  return (
    <>
      <div className="about-container" id="education">
        <div className="mid-container">
          <div className="col-2">
            <img src="./images/man-2.png" alt="" />
          </div>
          <div className="col-2">
            <h1>Educaton</h1>
            <h2>Hello I`m Mohd Farman Parvez</h2>
            <div className="para">
              <h2>Degree</h2>
            </div>
            <div>btech</div>
            <div>institution</div>
            <div>aktu</div>
            <div style={{display: 'flex'}}>
            <div>from : </div>
            <div style={{paddingRight: '30px'}}> 01-02-2015</div>
            <div>to: </div>
            <div>01-02-2015</div>
            </div>
            {/* {education.map((edu) => 
            <div>{edu.degree}</div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Education;
