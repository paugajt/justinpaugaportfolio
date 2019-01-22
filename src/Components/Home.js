import React, { Component } from 'react';
import '../CSS/Home.css'
import headshot from '../Photos/HeadShot.jpg'

class Home extends Component {
    render() {
        return (
            <div id='home' style={{top: '30px', position: 'relative'}}>
                <h1>Justin Pauga</h1>
                <img src={headshot} alt='headshot' style={{borderRadius: '50%', height: '500px', width: '375px'}}/>
                <h2>Software Engineer</h2>
            </div>
        );
    }
}

const liStyle = {
    float: 'left',
    height: '60px',
    width: '60px'
}

export default Home;