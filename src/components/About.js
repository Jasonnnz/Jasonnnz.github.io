import picture3 from '../images/profilepicture2.png'
import picture2 from '../images/profilepicture.JPG'
function About(){
    return(
        <div className="about-div">
            <div className="inner-about">
                <div className="summary">
                    <h3 style={{color:"black"}}>About</h3>
                    <h1 style={{color:"black"}}>Let me introduce myself.</h1>
                    <div className="picture-description">
                        <img src={picture3} alt="Profile Picture" height="150px" width="150px"></img>
                        <div className="description-div"><p className="description">
                            I'm a Full-stack web developer experienced in JavaScript and Ruby on Rails with a background in Applied Mathematics. I have a strong work ethic, an eagerness to learn, and internship experience.
                        </p></div>
                    </div>
                </div>
                <div className="about-bottom-div">
                    <div className="my-profile"></div>
                    <div className="skills"></div>
                </div>
            </div>
        </div>
    )
}

export default About;