import jobra from '../images/jobra.png'
import yourseum from '../images/yourseum.png'
import steam from '../images/steam0.5.png'
import studybuddy from '../images/studybuddy.png'
import { FaCaretDown } from "react-icons/fa"
import {Card, Icon} from 'semantic-ui-react'

let projects = [{front:"https://github.com/Jasonnnz/jobra_frontend", back:"https://github.com/Jasonnnz/jobra_backend", image:jobra, name: "Jobra", description: "A React application inspired by “Trello”, that allows users to keep track of job applications with a data layer to allow the creation of ad hoc charts.", languages: "React, Ruby on Rails, PostgreSQL, ChartJS"},
                {front:"https://github.com/Jasonnnz/yourseum_frontend", back:"https://github.com/Jasonnnz/yourseum_backend", image:yourseum, name: "Yourseum", description: "A React application that takes favorite masterpieces out of the museum and places selections on a user’s screen.", languages: "React, Ruby on Rails, PostgreSQL, Netlify, Heroku"},
                {front:"https://github.com/Jasonnnz/steam0.5_frontend", back:"https://github.com/Jasonnnz/steam0.5_backend", image:steam, name: "Steam0.5", description: "A single-page application that allows a user to connect and find common game interests with other users.", languages: "JavaScript, Ruby on Rails, PostgreSQL, HTML, CSS"},]
// {front:"https://github.com/Jasonnnz/study_buddy", image:studybuddy, name: "StudyBuddy", description: "A JavaScript application that allows users to connect with other students and see what classes they're taking.", languages: "JavaScript, Ruby on Rails, SQLite3"}
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