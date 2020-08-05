import React from 'react';
import Power from './Power';
import Soundbank from './Soundbank';
import SoundName from './SoundName';
import Volume from './Volume';

export default function Controller(props) {
    return (
        <div>
            <Power />
            <SoundName clipName={props.clipName}/>
            <Soundbank bankToggle={props.bankToggle} handleBankClick={props.handleBankClick}/>
            <Volume changeVolume={props.changeVolume}/>
        </div>
    )
}
