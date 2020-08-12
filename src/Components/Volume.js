import React from 'react'

export default function Volume(props) {
    return (
        
        <div className="text-center align-items-center col-12 form-group">
            <label for="volumeRange"></label>
            <input type="range" className="form-control-range" id="volumeRange" onChange={props.changeVolume}/>
        </div>
        
    )
}
