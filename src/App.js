import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import VideoState from './context/videos/VideoState';

function App() {
  return (
    <VideoState>
      <Router>
        <div className="mb-10">
          <header className="mb-10">
            <Navbar />
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </Router>
    </VideoState>
  );
}

export default App;
