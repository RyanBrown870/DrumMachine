import React from 'react'

export default function Soundbank(props) {
    let icon;
    if (props.bankToggle) {
        icon = <i class="fas fa-toggle-on"></i>;
    } else {
        icon = <i class="fas fa-toggle-off"></i>;
    }
    return (
        <div>
            Bank
            <button className="btn" onClick={props.handleBankClick}>
            {icon}
            </button>
        </div>
    )
}
