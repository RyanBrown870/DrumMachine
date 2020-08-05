import React, { Component } from 'react'
import ReactFCCtest from 'react-fcctest';
import DrumPadContainer from './DrumPadContainer'
import Controller from './Controller';
import './App.css'
import { clipBank } from '../util/clipBank'
import { letters } from '../util/letters'
import ReactDOM from 'react-dom'

export default class App extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      clips: clipBank[0],
      bank_toggle: true,
      letters: letters,
      clip_name: '',
      volume: 0.5
    }
  }

  handleBankClick = () => {
    this.setState(state => ({
      bank_toggle: !state.bank_toggle
    })
    )
    if (this.state.bank_toggle) {
      this.setState({
        clips: clipBank[0]
      })
    } else {
      this.setState({
        clips: clipBank[1]
      })
    }
  }

  handleAudioClick = (e) => {
    let audio = document.getElementById(e.target.innerText);
    audio.volume = this.state.volume;
    audio.play();
    this.displayClipName(e.target.innerText); //update the text
}



handleKeyDown = (e) => {
  // need uppercase for letters array match
  const id = e.key.toUpperCase();
  // only need to fire for matching keys
    if (letters.find(element => element == id)) {
            let audio = document.getElementById(id);
            audio.volume = this.state.volume;
      audio.play();
      this.displayClipName(id);
    }
}

  displayClipName = (letter) => {
    const index = this.state.letters.findIndex(item => {
      return item == letter
    });
    const regEx = /https:\/\/s3\.amazonaws.com\/freecodecamp\/drums\//;


    this.setState(state => ({
      clip_name: this.state.clips[index].split(regEx)[1].split('.')[0].replace(/[\_\-]/g, ' ')
    }))
  }

  changeVolume = (e) => {
    let volume = e.target.value / 100;
    this.setState({
      volume: volume
    })
  }



  render() {

    return (
      <div onKeyDown={this.handleKeyDown} tabIndex={0}>
      <div id="drum-machine" className="container">


        <div className="row vertical-center">
          <div className="col">
            <DrumPadContainer
              clips={this.state.clips}
              letters={this.state.letters}
              displayClipName={this.displayClipName}
              volume={this.state.volume}
              handleAudioClick={this.handleAudioClick}
             
            />
          </div>
          <div className="col">
            <Controller
              bankToggle={this.state.bank_toggle}
              handleBankClick={this.handleBankClick}
              clipName={this.state.clip_name}
              changeVolume={this.changeVolume}
            />
          </div>
        </div>
        <ReactFCCtest />
      </div>

      </div>
    )
  }
}



