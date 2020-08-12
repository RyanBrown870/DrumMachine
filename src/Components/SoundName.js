import React from 'react'

class SoundName extends React.Component {
    render() {
        return (
            <div className="text-center justify-content-center">
                <div className="bg-info text-white">
                    <p id="display">{this.props.clipName}</p>
                </div>
            </div>
        )
    }
}

export default SoundName