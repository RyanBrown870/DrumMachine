import React from 'react';
import Toggle from './Toggle';
import SoundName from './SoundName';
import Volume from './Volume';

export default function Controller(props)  {
    return (
        <div className="row justify-content-center">
            <Toggle text={'Power'} toggle={props.power} handleClick={props.powerToggle}/>
            <SoundName clipName={props.clipName}/>
            <Volume changeVolume={props.changeVolume}/>
            <Toggle text={'Bank'} toggle={props.bankToggle} handleClick={props.handleBankClick}/>
        </div>
    )
 }

