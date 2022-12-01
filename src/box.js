import React, { Component } from "react";
import './box.css';

class Box extends Component {
    static defaultProps = {
        allColors: ["purple", "magenta", "pink", "levander"]
    }
    constructor(props) {
        super(props);
        this.state = {color: 'purple'};
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor(){
        
    }
    
    handleClick(){
        this.pickColor()
    }
    render() {
        return (
            <div className="Box" 
            style={{backgroundColor: this.state.color}} 
            onClick={this.handleClick}>

            </div>
        )
    }
}


export default Box;