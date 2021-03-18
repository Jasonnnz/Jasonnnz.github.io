import {SocialIcon} from 'react-social-icons'

function HomePage(){
    return(
        <div className="homepage">
            <div className="my-name">
                <h1>Jason Zhou</h1>
                <h3><span>Software Engineer</span></h3>
                <ul className="social">
                    <li><SocialIcon target="_blank" url="https://github.com/Jasonnnz" fgColor="white" bgColor="transparent"/></li>
                    <li><SocialIcon target="_blank" url="https://www.linkedin.com/in/jasonnnz/" fgColor="white" bgColor="transparent"/></li>
                    <li><SocialIcon target="_blank" url="https://medium.com/@jasonczhou3" fgColor="white" bgColor="transparent"/></li>
                </ul>
            </div>
        </div>
    );
}

export default HomePage;