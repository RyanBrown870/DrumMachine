import React from 'react';
import Power from './Power';
import Soundbank from './Soundbank';

export default function Controller(props) {
    return (
        <div>
            <Power />
            <Soundbank bankToggle={props.bankToggle} handleBankClick={props.handleBankClick}/>
        </div>
    )
}
