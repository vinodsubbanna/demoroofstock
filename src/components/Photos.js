import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Photos.css';

class Photos extends Component {

    getSlides = (src, index) => {
        return (
            <div key={index}>
                <img src={src} alt={`image-${index}`}/>
            </div>
        )
    }

    render() {
        const { photos } = this.props;
        return (
            <Carousel>
                {
                   photos.map((photo, index) => {
                        return this.getSlides(photo.url, index)
                    })
                }
            </Carousel>
        );
    }
}

export default Photos;