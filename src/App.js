import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import HomePage from './components/HomePage';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        {/* <Route path="/resume">
          <Resume/>
        </Route> */}
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
