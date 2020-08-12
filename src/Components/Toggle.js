import React from 'react'

export default function Toggle(props) {
    let icon;
    if (props.toggle) {
        icon = <i class="fas fa-toggle-on"></i>;
    } else {
        icon = <i class="fas fa-toggle-off"></i>;
    }
    return (
        <div className="text-center col-12">
            {props.text}
            <button className="btn" onClick={props.handleClick}>
            {icon}
            </button>
        </div>
    )
}
