import {HiOutlineMail} from 'react-icons/hi'
import {ImLinkedin} from 'react-icons/im'
import {FaPhoneAlt} from 'react-icons/fa'
import {SocialIcon} from 'react-social-icons'
function Contact(){
    return(
        <div className="contact-div">
            <div className="inner-contact">
                <div className="contact-me">
                    <h1 className="lets-connect"style={{margin:"0", color:"black"}}>Let's Connect.</h1>
                </div>
                <div className="contact-links">
                    <div className="contact-email">
                        <HiOutlineMail style={{color:"black", height:"4em", width:"4em"}}/>
                        <span style={{color:"black", padding:"15px 10px"}}>jzhou35@buffalo.edu</span>
                    </div>
                    <div className="contact-linkedin">
                        {/* <ImLinkedin style={{color:"black", height:"3em", width:"3em"}}/> */}
                        <SocialIcon target="_blank" url="https://www.linkedin.com/in/jasonnnz/" fgColor="white" bgColor="black"/>
                        <a className="linkedin-a" href="https://www.linkedin.com/in/jasonnnz/" target="_blank">LinkedIn</a>
                    </div>
                    {/* <div className="contact-phone">
                        <FaPhoneAlt style={{color:"black", height:"3em", width:"3em"}}/>
                        <span style={{color:"black", padding:"10px"}}>(646)-625-9905</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Contact;