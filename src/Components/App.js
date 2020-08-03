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
    clips: clipBank,
    bank_toggle: true,
    letters: letters
  }
}




  render() {
    let clips;
    if (this.state.bank_toggle) {
      clips = this.state.clips[0];
    } else {
      clips = this.state.clips[1];
    }

    return (
      <div id="drum-machine" className="container">
       
        
          <div className="row vertical-center">
        <div className="col">
        <DrumPadContainer 
        clips={clips} 
        letters={this.state.letters}
        handleClick={this.handleClick}
        />
        </div>
        <div className="col">
        <Controller />
        </div>
        </div>
        </div>
        
      
    )
  }
}



