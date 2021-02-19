import React, {Component} from "react";
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Ingame from "./components/Ingame.jsx";
import Menu from "./components/Menu.jsx";
import themes from "./themes.json";

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 

      username: "Guest",
      theme: 0,


      setName: function(newName){
        this.setState({username: newName});
      },

      setTheme: function(newTheme){
        this.setState({theme: newTheme})
      }

    }
  }

  render(){
    return(
      <Router>
        <section>
          <div className="main-container">
            <Switch>

              <Route path="/game">
                <Ingame theme={this.state.theme} username={this.state.username}/>
              </Route>

              <Route path="/">
                <Menu setName={this.state.setName.bind(this)} setTheme={this.state.setTheme.bind(this)} />
              </Route>

            </Switch>
          </div>
        </section>
      </Router>
    )
  }
}

export default App;
