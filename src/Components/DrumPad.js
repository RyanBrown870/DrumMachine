import React from 'react'

class DrumPad extends React.Component {


    handleClick = () => {
        let audio = document.getElementById(this.props.letter);
        audio.play();
    }

    render() {
        return (
            <div className="col-4 drum-pad">
                <button
                    type="button"
                    className="btn btn-dark btn-block"
                    onClick={this.handleClick}
                >
                    {this.props.letter}
                </button>

                <audio
                    id={this.props.letter}
                    className="clip"
                    src={this.props.clip}>
                </audio>

            </div>
        )
    }
}

export default DrumPad;