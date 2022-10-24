import React, { Component } from 'react'

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 1 };
        this.handleClick = this.handleClick.bind(this);
    }

    generateNum() {
        let newNum = Math.floor(Math.random() * 10) + 1;
        this.setState({ num: newNum });
        // console.log(newNum);
    }

    handleClick() {
        this.generateNum();
    }
    render() {
        let newH1;
        if (this.state.num == 7) {
            newH1 = <h1>You win!!! The random number is 7</h1>
        } else {
            newH1 = <h1>Number is: {this.state.num}</h1>
        }
        return (
            <div>
                {newH1}
                {this.state.num !== 7 && <button onClick={this.handleClick}>Generate a random number</button>}
            </div>
        )
    }
}


export default Clicker;