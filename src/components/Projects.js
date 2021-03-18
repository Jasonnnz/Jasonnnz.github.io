import jobra from '../images/jobra.png'
import yourseum from '../images/yourseum.png'
import steam from '../images/steam0.5.png'
import studybuddy from '../images/studybuddy.png'
import { FaCaretDown } from "react-icons/fa"
import {Card, Icon} from 'semantic-ui-react'

let projects = [{demo:"https://www.loom.com/share/366f0507187a4e4389cdbc93427f850a", front:"https://github.com/Jasonnnz/jobra_frontend", back:"https://github.com/Jasonnnz/jobra_backend", image:jobra, name: "Jobra", description: "A React application that allows users to keep track of job applications with a data layer to allow the creation of ad hoc charts.", languages: "React, Ruby on Rails, PostgreSQL, ChartJS"},
                {demo:"https://www.loom.com/share/26a7ca5f8dba4250adc7188da8538004", front:"https://github.com/Jasonnnz/yourseum_frontend", back:"https://github.com/Jasonnnz/yourseum_backend", image:yourseum, name: "Yourseum", description: "A React application that takes favorite masterpieces out of the museum and places selections on a user’s screen.", languages: "React, Ruby on Rails, PostgreSQL, Netlify, Heroku"},
                {demo:"https://www.loom.com/share/d4e988b6b97e46afa9a6e431b2fcfc33", front:"https://github.com/Jasonnnz/steam0.5_frontend", back:"https://github.com/Jasonnnz/steam0.5_backend", image:steam, name: "Steam0.5", description: "A single-page application that allows a user to connect and find common game interests with other users.", languages: "JavaScript, Ruby on Rails, HTML, CSS"}]
function Projects(){
    let projs = projects.map((p) => {
        return <Card style={{height:"60%", width:"23%", boxShadow:"5px 5px 7px 5px black"}} 
        image={p.image} 
        header={p.name} 
        description={p.description} 
        meta={p.languages}
        extra={<div className="extra-btn">
            <a href={p.front}><Icon name="github">Frontend</Icon></a>
            <a href={p.back}><Icon name="github alternate">Backend</Icon></a>
            <a href={p.demo}><Icon name="globe">Demo</Icon></a>
            </div>}
        />
    })
    return (
        <div className="projects-div">
            <Card.Group itemsPerRow={4} className="project-list">
                {projs}
                <Card 
                style={{height:"60%", width:"23%", boxShadow:"5px 5px 7px 5px black"}}
                image={studybuddy} 
                header="StudyBuddy" 
                description="A JavaScript application that allows users to connect with other students and see what classes they're taking." 
                meta="JavaScript, Ruby on Rails, SQLite3"
                extra={<div className="extra-btn">
                    <a href="https://github.com/Jasonnnz/study_buddy"><Icon name="github">GitHub</Icon></a>
                </div>}/>
            </Card.Group>
        </div>
    )
}

export default Projects;