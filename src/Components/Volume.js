import React from 'react'

export default function Volume(props) {
    return (
        <div className="form-group">
            <label for="volumeRange">Volume</label>
            <input type="range" className="form-control-range" id="volumeRange" onChange={props.changeVolume}/>
        </div>
    )
}
