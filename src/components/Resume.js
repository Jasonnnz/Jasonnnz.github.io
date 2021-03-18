import resume2 from '../images/resume.png';
import resume from '../images/resume.pdf';
function Resume(){
    return(
        <div className="resume-div">
            <div className="inner-resume">
                <iframe src={resume} height="100%" width="100%"/>
                {/* <img src={resume2} height="100%"/> */}
            </div>
        </div>
    )
}

export default Resume;