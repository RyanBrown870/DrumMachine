import React from 'react'

export default function Volume(props) {
    return (
        <div className="text-center align-items-center w-75 py-3 m-0 col-xs-12 form-group">
            <label for="volumeRange"></label>
            <input type="range" className="form-control-range" id="volumeRange" onChange={props.changeVolume}/>
        </div>   
    )
}
