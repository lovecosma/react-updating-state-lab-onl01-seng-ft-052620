import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {

    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
                }
            }
        }
    }

    changeBitrate = (event) => {
       this.setState({
           settings : {
           ...this.state.settings,
           bitrate:  12
           }
       })
    }

    changeResolution = (e) => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render(){
         return(
             <div>
                 <button className='bitrate' onClick={this.changeBitrate}>{this.state.settings.bitrate}</button>
                 <button className='resolution' onClick={this.changeResolution}>{this.state.settings.video.resolution}</button>
             </div>
         )
    }
}
