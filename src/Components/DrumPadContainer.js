import React from 'react'
import DrumPad from './DrumPad'

export default function DrumPadContainer(props) {


    // use map to render DrumPads then use if statement if id === 4 to include a line breaking div 
    // before the component
    return (
        <div id="display" className="row text-center btn-toolbar">
            {
                props.clips.map((clip, index, arr) => {
                    return <DrumPad 
                    clip={clip}
                    letter={props.letters[index]}
                    handleClick={props.handleClick}
                    />
                })
            }
        </div>
    )
}

//could work
{/* <div class="container">
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="w-100"></div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
</div> */}