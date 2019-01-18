import React, { Component } from 'react';
import '../Components/IgTiles'
import linkedin from '../Icons/linkedIn.png';
import github from '../Icons/github.png';
import instagram from '../Icons/instagram.png';
import '../CSS/Home.css'
import IgTiles from '../Components/IgTiles';

class Home extends Component {
    render() {
        return (
            <div id='home'> 
                <h2>Software Engineer</h2>
                <h1>Justin Pauga</h1>
                <span>
                <ul style={{position: 'relative', top: '50%', left: '45%'}}>
                    <li style={{liStyle}}><a href='https://www.linkedin.com/in/justin-pauga/'><img src={linkedin} alt='LinkedIn' /></a></li>
                    <li style={{liStyle}}><a href='https://github.com/paugajt'><img src={github} alt='Github'/></a></li>
                    <li style={{liStyle}}><a href='https://www.instagram.com/sh0wnuf/'><img src={instagram} alt='Instagram' /></a></li>
                </ul>
                <IgTiles />
                </span>
            </div>
        );
    }
}

const imgStyle = {
    height: '40px',
    width: '40px'
}

const liStyle = {
    float: 'left'
}
export default Home;