import picture3 from '../images/profilepicture2.png'
function About(){
    return(
        <div className="about-div">
            <div className="inner-about">
                <div className="summary">
                    <h2 style={{color:"black", margin:"40px"}}>About</h2>
                    <div className="picture-description">
                        <img src={picture3} alt="Profile Picture" height="150px" width="150px"></img>
                        <div className="description-div"><p className="description">
                            I'm a Full-stack Web Developer experienced in JavaScript and Ruby on Rails with a background in Applied Mathematics and internship experience at Stark & Wayne LLC. I am team oriented, have a strong work ethic, and an eagerness to learn.
                        </p></div>
                    </div>
                </div>
                <div className="about-bottom-div">
                    <div className="proficient-skills">
                        <div className="skills-list-div">
                            <h2 className="skills-title">Proficient</h2>
                            <ul className="skills-list">
                                <li><i className="devicon-javascript-plain colored"></i></li>
                                <li><i className="devicon-react-original-wordmark colored"></i></li>
                                <li><i className="devicon-rails-plain-wordmark colored"></i></li>
                                <li><i className="devicon-html5-plain-wordmark colored"></i></li>
                                <li><i className="devicon-css3-plain-wordmark colored"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="familiar-skills">
                        <div className="skills-list-div">
                            <h2 className="skills-title">Familiar</h2>
                            <ul className="skills-list">
                                <li><i className="devicon-python-plain-wordmark colored"></i></li>
                                <li><i className="devicon-java-plain-wordmark colored"></i></li>
                                <li><i className="devicon-postgresql-plain-wordmark colored"></i></li>
                                <li><i className="devicon-heroku-plain-wordmark colored"></i></li>
                                <li><i className="devicon-git-plain-wordmark colored"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="want-to-learn-skills">
                        <div className="skills-list-div">
                            <h2 className="skills-title">Interested in</h2>
                            <ul className="skills-list">
                                <li><i className="devicon-swift-plain-wordmark colored"></i></li>
                                <li><i className="devicon-angularjs-plain-wordmark colored"></i></li>
                                <li><i className="devicon-django-plain colored"></i></li>
                                <li><i className="devicon-docker-plain-wordmark colored"></i></li>
                                <li><i className="devicon-kubernetes-plain-wordmark colored"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;