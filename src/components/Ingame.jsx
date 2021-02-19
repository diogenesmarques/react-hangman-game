import React, {Component} from "react";
import {Link} from "react-router-dom";
import themes from "../themes.json"

class Ingame extends Component {
    constructor(props){
        super(props);

        this.state = {
            themeObj: themes[this.props.theme],
            themeName: this.getThemeName(this.props.theme),
            lives: 5,
            word: "",
        }

        this.getThemeName = this.getThemeName.bind(this);
        this.setWord = this.setWord.bind(this);
    }

    setWord = function(){
        let array = this.state.themeObj.words
        this.setState({
            word: array[Math.floor(Math.random() * array.length)]
       })
    }

    getThemeName = function(themeId){   
        return themes[themeId].description;
    }

    componentDidMount(){
        this.setWord();
    }

    render(){
        return(
            <div className="container">
                <h1 className="noselect title">HANGMAN</h1>
                <h2 className="noselect subtitle">The theme is: {this.state.themeName} | The word is: {this.state.word}</h2>
                <div className="game-container">
                    <div className="noselect lives">
                        <div className="text-lives">You have</div>
                        <div className="number-lives">{this.state.lives}</div>
                        <div className="text-lives">Lives remaining</div>
                    </div>

                    <div className="keyboard">
                        {this.state.word}
                    </div>
                </div>
            </div>
        )
    }
}

export default Ingame;