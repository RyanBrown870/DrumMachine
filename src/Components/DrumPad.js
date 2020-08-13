import React from 'react'

export default function DrumPad(props) {
    return (
        <div className="col-4 mt-2" >
            <button
                type="button"
                className="btn btn-dark btn-block drum-pad"
                onClick={props.handleAudioClick}
                id={props.clip}
            >   <audio
                id={props.letter}
                className="clip"
                src={props.clip}
            >   </audio>
                {props.letter}
            </button>
        </div>
    )
}

