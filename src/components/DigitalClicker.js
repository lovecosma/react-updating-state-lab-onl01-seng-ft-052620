import React, { Component } from 'react'

export class DigitalClicker extends Component {

    constructor(){
        super()
        this.state = {
            timesClicked : 0
        }
    }

    handleClick = (event) => {
        let currentNumberOfClicks = this.state.timesClicked
        this.setState({
            timesClicked : currentNumberOfClicks += 1
        })
    }

    render() {
        return (
            <div>
               <button onClick={this.handleClick} >{this.state.timesClicked}</button> 
            </div>
        )
    }
}

export default DigitalClicker
