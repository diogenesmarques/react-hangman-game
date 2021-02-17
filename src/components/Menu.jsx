import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Menu extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="menu-container">
                <h1 className="noselect">HANGMAN</h1>
                <div className="menu-content">
                    <input type="text" name="name" placeholder="Enter your name..."/>
                    <div className="select">
                        <select name="theme">
                            <option value="default" selected="selected" disabled>Choose a theme</option>
                            <option value="soccer">European soccer teams</option>
                            <option value="sa-soccer">South American soccer teams</option>
                            <option value="cars">Car makers</option>
                            <option value="bands">Rock bands</option>
                            <option value="videogames">Video-games</option>
                            <option value="esports">Esports teams</option>
                        </select>
                    </div>
                    <Link to="/game"><button className="play-button"><b>PLAY</b></button></Link>
                </div>
            </div>
        )
    }
}