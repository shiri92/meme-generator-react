import React, { Component } from 'react';

import memeService from '../services/memeSefrvice';


class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImages: []
        }
    }

    async componentDidMount() {
        let res = await memeService.getImages();
        this.setState({ allMemeImages: res.data.memes });
    }

    handleChange = ev => {
        let { name, value } = ev.target;
        this.setState({ [name]: value });
    }

    handleSubmit = ev => {
        ev.preventDefault();
        let images = this.state.allMemeImages;
        let randomImgUrl = images[Math.floor(Math.random() * images.length)].url;
        this.setState({ randomImage: randomImgUrl });
    }


    render() {
        return (
            <div className="meme-generator">
                <form className="meme-form d-flex my-4" onSubmit={this.handleSubmit}>
                    <input
                        className="form-control"
                        type="text"
                        value={this.state.topText}
                        name="topText"
                        placeholder="Top text"
                        onChange={this.handleChange}
                    />

                    <input
                        className="form-control"
                        type="text"
                        value={this.state.bottomText}
                        name="bottomText"
                        placeholder="Bottom text"
                        onChange={this.handleChange}
                    />
                    <button className="btn btn-primary">Gen</button>
                </form>
                <div className="meme position-relative">
                    <img className="" src={this.state.randomImage} alt="problem" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        );

    }
}

export default MemeGenerator;
