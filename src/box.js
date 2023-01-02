import React, { Component } from "react";
import './box.css';
import { choice } from "./helpers";

class Box extends Component {
    static defaultProps = {
        allColors: ["purple", "magenta", "pink", "blue", "violet"]
    }
    constructor(props) {
        super(props);
        this.state = {color: choice(this.props.allColors)};
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