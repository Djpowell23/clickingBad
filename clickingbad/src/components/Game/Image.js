import React, { Component } from "react";

// Class State
class Image extends Component {
    imageClick = ({ id, clicked }) => {
        // ???
        if (!this.props.clicked) {
            this.props.handleClick({ id, clicked });
        } else {
            // if it has been clicked, just send state
            this.props.handleClick({ id, clicked });
        }
    };

    render() {
        const { id, clicked, img } = this.props;
        return (
            <div className="col game-img">
                <img onClick={e => this.imageClick({ id, clicked })} src={img} alt={"img"} className="hoverable z-depth-2" />
            </div>
        )
    }
};

export default Image;