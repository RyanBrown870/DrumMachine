import React from 'react';
import Toggle from './Toggle';
import SoundName from './SoundName';
import Volume from './Volume';

 class Controller extends React.Component {
     render() {
    return (
        <div className="row justify-content-center align-content-stretch">
            <Toggle text={'Power'} toggle={this.props.power} handleClick={this.props.powerToggle}/>
            <SoundName clipName={this.props.clipName}/>
            <Volume changeVolume={this.props.changeVolume}/>
            <Toggle text={'Bank'} toggle={this.props.bankToggle} handleClick={this.props.handleBankClick}/>
        </div>
    )
}
 }

export default Controller;