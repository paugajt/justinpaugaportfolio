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
        const BackArrow = (props) => (
            <div onClick={props.previousImage} style={{fontSize: '2em', marginRight: '12px'}}>
            <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
            </div>
        )
        
        const NextArrow = (props) => (
            <div onClick={props.nextImage} style={{fontSize: '2em', marginLeft: '12px'}}>
                <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
            </div>
        )
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px'}}>
                {console.log(this.state.photos)}
                {this.state.slideCount !== 0 ? <BackArrow previousImage={this.previousImage}/> : ''}
                {this.state.photos.map((photo, key) => {
                    if (this.state.photos.indexOf(photo) === this.state.slideCount) {
                    return (
                        <div key={photo.id} style={{margin: '0 auto'}}>
                            <img src={photo.images.standard_resolution.url} alt={photo.caption} style={{width: '500px', height: '500px'}}/>
                            <div style={{width: '600px', margin: '24px auto', fontStyle: 'italic'}}>
                                {photo.caption !== null ? photo.caption.text : ''}
                            </div>
                        </div>
                    )
                    }
                    return ''
                })}
                {this.state.slideCount !== (this.state.photos.length -1) ? <NextArrow nextImage={this.nextImage}/> : ''}
            </div>
        )
    }
}

export default IgTiles;