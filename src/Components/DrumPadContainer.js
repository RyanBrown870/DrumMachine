import React from 'react'
import DrumPad from './DrumPad'

export default function DrumPadContainer(props) {

    // use map to render DrumPads
    return (
        <div className="row text-center btn-toolbar">
            {
                props.clips.map((clip, index, arr) => {
                    return <DrumPad
                    key={props.letters[index]} 
                    clip={clip}
                    letter={props.letters[index]}
                    handleAudioClick={props.handleAudioClick}
                    />
                })
            }
        </div>
    )
}




