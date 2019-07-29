import React from "react";
import "./Game.css";
import Image from "./Image.js";
import imgs from "../../img";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

// Create a state with count, clicked boolean, score to add up, and the img
class Game extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = { count: 0, clicked: false, score: 0, imgs };
    }

    // Shuffle function to randomize order
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle
        while (0 !== currentIndex) {
            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And Swap it with the current element
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    // handleClick function for each choice user makes
    handleClick = ({ id, clicked }) => {
        let imgs;
        if (clicked) {
            imgs = this.state.imgs.map(img => { return { ...img, clicked: false } })
        } else {
            imgs = this.state.imgs.map(img => {
                if (img.id === id) {
                    return { ...img, clicked: true }
                } else return img;
            });
        }

        const score = imgs.reduce((acc, img) => {
            if (img.clicked) return acc + 1
            else return acc
        }, 0);

        this.setState({ score, imgs: this.shuffle(imgs) });
    }

    // Render
    render() {
        return (
            <div className="grid">
                <Navbar score={this.state.score} />
                <div className="game-container">
                    <div className="row">
                        <div className="col center">
                            <h4 className="instructions center">Click on an image to earn points, but don't click it more than once!</h4>
                        </div>
                    </div>
                    <div className='row'>
                        {this.state.imgs.map((img, i) => {
                            return (
                                <Image
                                    img={img.img}
                                    clicked={img.clicked}
                                    key={img.id}
                                    id={img.id}
                                    handleClick={this.handleClick}
                                />
                            )
                        })}
                    </div>

                </div>
                <Footer />
            </div>
        );
    } // end Render
} // end Class Component


export default Game;