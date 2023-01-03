import React, {Component} from "react";
import Box from "./box";
import "./boxContainer.css";

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 8,
        allColors: ["purple", "magenta", "pink", "rosybrown", "violet","mediumvioletred", "fuchsia", "salmon", "blueviolet"]
    };
    render() {
        const boxes= Array.from({length: this.props.numBoxes }).map(() => (
            <Box colors={this.props.allColors}/>
        ));
        return <div className="boxContainer"> {boxes} </div>;
    }
}

export default BoxContainer;