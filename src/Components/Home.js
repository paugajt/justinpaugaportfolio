import React, { Component } from 'react';
import linkedin from '../Icons/linkedIn.png';
import github from '../Icons/github.png';
import instagram from '../Icons/instagram.png';
import '../CSS/Home.css'
import headshot from '../Photos/HeadShot.jpg'

class Home extends Component {
    render() {
        return (
            <div id='home' style={{top: '30px', position: 'relative'}}>
                <h1>Justin Pauga</h1>
                <img src={headshot} alt='headshot' style={{borderRadius: '50%', height: '500px', width: '375px'}}/>
                <h2>Software Engineer</h2>
                <span>
                <ul style={{position: 'relative', top: '50%', left: '45%'}}>
                    <li style={{liStyle}}><a href='https://www.linkedin.com/in/justin-pauga/'><img src={linkedin} alt='LinkedIn' /></a></li>
                    <li style={{liStyle}}><a href='https://github.com/paugajt'><img src={github} alt='Github'/></a></li>
                    <li style={{liStyle}}><a href='https://www.instagram.com/sh0wnuf/'><img src={instagram} alt='Instagram' /></a></li>
                </ul>
                </span>
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