import React, {Component} from "react";
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Ingame from "./components/Ingame.jsx";
import Menu from "./components/Menu.jsx";

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Router>
        <section>
          <div className="main-container">
            <Switch>
              <Route path="/game">
                <Ingame/>
              </Route>
              <Route path="/">
                <Menu/>
              </Route>
            </Switch>
          </div>
        </section>
      </Router>
    )
  }
}

export default App;
