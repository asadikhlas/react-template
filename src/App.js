import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Ministries from './components/Ministries';
import Sermons from './components/sermons';
import Home from "./components/home";
import About from './components/about';
import Contact from './components/contact';
import Events from './components/events';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header role="banner">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container">
              <Link to="/" className="navbar-brand absolute">
              Brotherly<span className="fa fa-heart text-primary" />{" "}
              </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample05"
                  aria-controls="navbarsExample05"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div
                  className="collapse navbar-collapse navbar-light"
                  id="navbarsExample05"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item ">
                    <Link to="/ministries" className="nav-link">
                    Ministries
                      </Link>
                    </li>

                    <li className="nav-item">
                    <Link to="/sermons" className="nav-link">
                    Sermons
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/events" className="nav-link">
                    Events
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about" className="nav-link">
                    About
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                    Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ministries"  component={Ministries} />
            <Route path="/sermons" component={Sermons} />
            <Route path="/events" component={Events} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
