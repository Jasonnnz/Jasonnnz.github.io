import jobra from '../images/jobra2.png'
import yourseum from '../images/yourseum2.png'
import steam from '../images/steam0.5.png'
import studybuddy from '../images/studybuddy.png'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

let projects = [{demo:"https://www.loom.com/share/366f0507187a4e4389cdbc93427f850a", front:"https://github.com/Jasonnnz/jobra_frontend", back:"https://github.com/Jasonnnz/jobra_backend", image:jobra, name: "Jobra", description: "A React application for users to keep track of job applications with a data layer to allow the creation of ad hoc charts.", languages: "React | Ruby on Rails | PostgreSQL | ChartJS"},
                {demo:"https://www.loom.com/share/26a7ca5f8dba4250adc7188da8538004", front:"https://github.com/Jasonnnz/yourseum_frontend", back:"https://github.com/Jasonnnz/yourseum_backend", image:yourseum, name: "Yourseum", description: "A React application that takes favorite masterpieces out of the museum and places selections on a user’s screen.", languages: "React | Ruby on Rails | Netlify | Heroku"},
                {demo:"https://www.loom.com/share/d4e988b6b97e46afa9a6e431b2fcfc33", front:"https://github.com/Jasonnnz/steam0.5_frontend", back:"https://github.com/Jasonnnz/steam0.5_backend", image:steam, name: "Steam0.5", description: "A single-page application that allows a user to connect and find common game interests with other users.", languages: "JavaScript | Ruby on Rails | HTML | CSS"}]

const useStyles = makeStyles({
    root: { maxWidth: 300, boxShadow:"5px 5px 7px 5px black"},
    media: { height: 200, width: "auto"}});
function Projects(){
    const classes= useStyles();

    let projs = projects.map((p) => {
        return  <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={p.image}
            title={p.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {p.name}
            </Typography>
            <Typography variant="body" >{p.languages}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {p.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a target="_blank" href={p.front} >Frontend</a>
          </Button>
          <Button size="small" color="primary">
          <a target="_blank" href={p.back} >Backend</a>
          </Button>
          <Button size="small" color="primary">
          <a target="_blank" href={p.demo} >Demo</a>
          </Button>
        </CardActions>
      </Card>
    })
    return (
        <div className="projects-div">
            {projs}
            <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={studybuddy}
                    title="StudyBuddy"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    StudyBuddy
                    </Typography>
                    <Typography variant="body">JavaScript | Ruby on Rails | SQLite3</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    A JavaScript application that allows users to connect with other students and see what classes they're taking.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    <a target="_blank" href={"https://github.com/Jasonnnz/study_buddy"} >Github</a>
                </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Projects;