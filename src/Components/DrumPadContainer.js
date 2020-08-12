import React from 'react'
import DrumPad from './DrumPad'

class DrumPadContainer extends React.Component {

render() {
    // use map to render DrumPads then use if statement if id === 4 to include a line breaking div 
    // before the component
    return (
        <div id="display" className="row text-center btn-toolbar">
            {
                this.props.clips.map((clip, index, arr) => {
                    return <DrumPad
                    key={this.props.letters[index]} 
                    clip={clip}
                    letter={this.props.letters[index]}
                    displayClipName={this.props.displayClipName}
                    volume={this.props.volume}
                    handleAudioClick={this.props.handleAudioClick}
                   
                    />
                })
            }
        </div>
    )
}
}

export default DrumPadContainer;

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