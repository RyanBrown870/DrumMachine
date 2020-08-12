import React, { Component } from 'react'
import ReactFCCtest from 'react-fcctest';
import DrumPadContainer from './DrumPadContainer'
import Controller from './Controller';
import './App.css'
import { clipBank } from '../util/clipBank'
import { letters } from '../util/letters'


export default class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      clips: clipBank[0],
      bank_toggle: true,
      letters: letters,
      clip_name: 'Song Name',
      volume: 0.5,
      power: true
    }
  }

  powerToggle = () => {
    this.setState(state => ({
      power: !state.power
    }))
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
    let audio = document.getElementById(e.target.innerText);  //use innertext on event to get Id of clicked element
    audio.volume = this.state.volume;
    audio.play();
    this.displayClipName(e.target.innerText); //update the text
  }



  handleKeyDown = (e) => {
    // need uppercase for letters array match
    const id = e.key.toUpperCase();
    // only need to fire for matching keys QWE etc
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
    let volume = e.target.value / 100; //need number between 0-1.
    this.setState({
      volume: volume
    })
  }



  render() {

    // Remove function with power button using conditional
    let Pads;
    let Controls;

    if (this.state.power) {
      Pads = <DrumPadContainer
        clips={this.state.clips}
        letters={this.state.letters}
        displayClipName={this.displayClipName}
        volume={this.state.volume}
        handleAudioClick={this.handleAudioClick}
      />;
      Controls = <Controller
        power={this.state.power}
        powerToggle={this.powerToggle}
        bankToggle={this.state.bank_toggle}
        handleBankClick={this.handleBankClick}
        clipName={this.state.clip_name}
        changeVolume={this.changeVolume}
      />
    } else {
      Pads = <DrumPadContainer
        clips={this.state.clips}
        letters={this.state.letters}
        volume={this.state.volume}
      />;
      Controls = <Controller
        power={this.state.power}
        powerToggle={this.powerToggle}
        bankToggle={this.state.bank_toggle}
        clipName={'Song Name'}
      />
    }

    return (
      <div onKeyDown={this.handleKeyDown} tabIndex={0}>  {/* Slight hack for div keydown listener */}
        <div id="drum-machine" className="container">


          <div className="row vertical-center">
            <div className="col">
              {Pads}
            </div>
            <div className="col">
              {Controls}
            </div>
          </div>
          <ReactFCCtest />
        </div>

      </div>
    )
  }
}



