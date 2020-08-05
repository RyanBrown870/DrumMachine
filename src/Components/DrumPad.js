import React from 'react'

class DrumPad extends React.Component {


    

    render() {
        return (
            <div className="col-4  mt-2" >
                <button
                    type="button"
                    className="btn btn-dark btn-block drum-pad"
                    onClick={this.props.handleAudioClick}
                    id={this.props.clip}
                ><audio
                id={this.props.letter}
                className="clip"
                src={this.props.clip}>
            </audio>
                    {this.props.letter}
                </button>

                

            </div>
        )
    }
}

export default DrumPad;