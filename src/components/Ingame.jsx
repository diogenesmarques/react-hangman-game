import React, {Component} from "react";
import themes from "../themes.json"
import {Redirect} from "react-router-dom"

class Ingame extends Component {
    constructor(props){
        super(props);

        this.state = {
            themeObj: themes[this.props.theme],
            themeName: this.getThemeName(this.props.theme),
            lives: 5,
            word:"",
            brokenWord:[""],
            guessedLetters: new Set([" "]),
            isGameOver: false
        }

        this.getThemeName = this.getThemeName.bind(this);
        this.setWord = this.setWord.bind(this);
        this.handleLetterClick = this.handleLetterClick.bind(this);
        this.gameOverCheck = this.gameOverCheck.bind(this);
        this.onGameLose = this.onGameLose.bind(this);
        this.onGameWin = this.onGameWin.bind(this);
        this.tick = this.tick.bind(this);
    }

    setWord(){
        let array = this.state.themeObj.words;
        this.setState({
            word: array[Math.floor(Math.random() * array.length)],
        }, () => {
            let word = this.state.word.toLowerCase();
            this.setState({
                brokenWord: word.split("")
            })
        })
    }   

    getThemeName(themeId){   
        return themes[themeId].description;
    }

    gameOverCheck(){
        if(this.state.lives <= 0){
            this.onGameLose();
        }

        if(this.state.brokenWord.every(letter => this.state.guessedLetters.has(letter))){
            this.onGameWin();
        }

    }

    onGameLose(){
        window.alert(`You lost, ${this.props.username}!`);
        this.setState({
            isGameOver: true
        })
    }

    onGameWin(){
        window.alert(`Congratulations, ${this.props.username}, you won!`)
        this.setState({
            isGameOver: true
        })
    }

    handleLetterClick(event){
        let letter = event.target.value;
        this.setState(state => ({
            guessedLetters: state.guessedLetters.add(letter)
        }))

        event.target.classList.add("clicked")
        
        if(this.state.brokenWord.includes(letter) == false){
            this.setState(state => ({
                lives: state.lives - 1
            }))
        }

    }
    
    renderLetters(){
        return this.state.brokenWord.map(letter =>
              (this.state.guessedLetters.has(letter) ? letter : "_"));
    }

    renderKeyboard(){
        return "qwertyuiopasdfghjklzxcvbnm".split("").map(letter => 
            (<button key={letter} value={letter} className="keyb-button" onClick={this.handleLetterClick} 
            disabled={this.state.guessedLetters.has(letter)}>
                {letter}
            </button>));
    }

    tick(){
        this.gameOverCheck();
    }

    componentDidMount(){
        this.setWord();
        this.interval = setInterval(() => this.tick(), 100)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        if(this.state.isGameOver){
            return <Redirect to="/"></Redirect>
        }
        if(this.props.username == "Guest"){
            return <Redirect to="/"></Redirect>
        }
        return(

            <div className="container">
                <h1 className="noselect title">HANGMAN</h1>
                <h2 className="noselect subtitle">The theme is: {this.state.themeName}</h2>
                <div className="game-container">
                    <div className="noselect lives">
                        <div className="text-lives">{this.props.username}, You have</div>
                        <div className="number-lives">{this.state.lives}</div>
                        <div className="text-lives">{this.state.lives == 1 ? "Life remaining." : "Lives Remaining"}</div>
                    </div>
                    <div className="noselect panel">
                        <div className="letters">

                            {this.renderLetters()}

                        </div>
                        <div className="keyboard">
                            
                            {this.renderKeyboard()}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ingame;