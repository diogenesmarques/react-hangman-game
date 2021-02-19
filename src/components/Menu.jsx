import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "Guest",
            theme: Math.floor(Math.random() * 5)
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);

    }

    handleUsernameChange(event){
        this.setState({
            username: event.target.value
        })
    }

    handleThemeChange(event){
        this.setState({
            theme: event.target.value
        })
    }

    render(){
        return(
            <div className="menu-container">
                <h1 className="noselect title">HANGMAN</h1>
                <div className="menu-content">

                    <input onChange={this.handleUsernameChange} type="text" name="name" placeholder="Enter your name..."/>

                    <div className="select">
                        <select defaultValue="none" onChange={this.handleThemeChange} name="theme">
                            <option value="none" disabled>Choose a theme</option>
                            <option value="0">European soccer teams</option>
                            <option value="1">South American soccer teams</option>
                            <option value="2">Rock bands</option>
                            <option value="3">Video-games</option>
                            <option value="4">Esports teams</option>
                        </select>
                        <p className="small-text">If you don't choose a theme, it will be randomly chosen.</p>
                    </div>
                    <Link to="/game"><button onClick={() => {this.props.setName(this.state.username); this.props.setTheme(this.state.theme)}} className="play-button"><b>PLAY</b></button></Link>
                </div>
            </div>
        )
    }
}

