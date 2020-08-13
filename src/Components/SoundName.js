import React from 'react'

export default function SoundName(props) {
        return (
            <div className="text-center w-75 col-xs-12">
                <div className="bg-info text-white">
                    <p id="display" className="m-0">{props.clipName}</p>
                </div>
            </div>
        )
    
}

