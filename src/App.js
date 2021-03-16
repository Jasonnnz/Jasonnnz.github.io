import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/about">
          About
          {/* <About/> */}
        </Route>
        <Route path="/resume">
          Resume
          {/* <Resume/> */}
        </Route>
        <Route path="/projects">
          Projects
          {/* <Projects/> */}
        </Route>
        <Route path="/contact">
          Contact
          {/* <Contact/> */}
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
