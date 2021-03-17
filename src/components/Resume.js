import resume from '../images/resume.pdf';
function Resume(){
    return(
        <div className="resume-div">
            <div className="inner-resume">
                <iframe src={resume} width="100%" height="100%" frameBorder="0"/>
            </div>
        </div>
    )
}

export default Resume;