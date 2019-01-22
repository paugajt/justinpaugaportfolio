import React, { Component } from 'react';
import linkedin from '../Icons/linkedIn.png';
import github from '../Icons/github.png';
import instagram from '../Icons/instagram.png';

class SocialMedia extends Component {
    render() {
        return (
            <div className='social-media-btns'>
                <div style={{borderLeft: '4px, black', height:'30px'}}></div> 
                <ul style={{position: 'fixed', bottom: '155px', listStyleType: 'none', margin:'0', padding:'0', left: '4%'}}>
                    <li style={{liStyle}}><a href='https://www.linkedin.com/in/justin-pauga/' target='_blank' style={linkStyle}><img src={linkedin} alt='LinkedIn' style={imgStyle} /></a></li>
                    <li style={{liStyle}}><a href='https://github.com/paugajt' target='_blank' style={linkStyle}><img src={github} alt='Github' style={imgStyle}/></a></li>
                    <li style={{liStyle}}><a href='https://www.instagram.com/sh0wnuf/' target='_blank' style={linkStyle}><img src={instagram} alt='Instagram' style={imgStyle} /></a></li>
                </ul>
                <div style={bullshit}></div>
                 
            </div>
        )
    }
}

const liStyle = {
    display: 'block'
}

const linkStyle = {
    display: 'block'
}

const imgStyle = {
    height: '30px',
    width: '30px',
}

const bullshit = {
  borderLeft: '3px solid white',
  height: '150px',
  position: 'fixed',
  bottom: '0',
  left: '5%',
  marginLeft: '-3px',
}
export default SocialMedia;