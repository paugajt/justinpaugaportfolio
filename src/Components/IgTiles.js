import React, { Component } from 'react';
import request from 'superagent';
import 'font-awesome/css/font-awesome.css';

class IgTiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            slideCount: 0
        }
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
    }

    
    componentWillMount() {
        this.fetchPhotos()
    }


    fetchPhotos() {
        request
          .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=104937957.1677ed0.a50fe5d097ac4fc69715cdba44804f3a')
          .then((res) => {
            this.setState({
              photos: res.body.data
            })
          })
    }
    nextImage() {
        this.setState({ slideCount: this.state.slideCount + 1})
    }

    previousImage() {
        this.setState({ slideCount: this.state.slideCount - 1})
    }
    render() {
        return (
            <div style={mainStyle}>
                {console.log(this.state.photos)}
                {this.state.photos.map((photo, key) => {
                    return (
                        <div key={photo.id} style={{margin: '0 auto'}} className='grid-item'>
                            <img src={photo.images.standard_resolution.url} alt={photo.caption} style={{width: '350px', height: '200px'}}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mainStyle = {
    display: 'inline-grid', 
    gridTemplateColumns: '350px 350px 350px 350px 350px',
    gridTemplateRows: 'repeat(200px)', 
    marginTop: '30px', 
    zIndex: '0', 
    position: 'relative'
}

export default IgTiles;