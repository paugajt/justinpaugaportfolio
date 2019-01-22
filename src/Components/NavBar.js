import React, { Component } from 'react';


class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='navbar' style={{width: '100%', position: 'fixed', top: '0'}}>
                <ul style={ulStyle}>
                    <li style={leftLi}><a href='#home' style={linkStyle} >Home</a></li>
                    <li style={rightLi}><a href='#resume' style={linkStyle} >Resume</a></li>
                    <li style={rightLi}><a href='#about' style={linkStyle} >About Me</a></li>
                    <li style={rightLi}><a href='#portfolio' style={linkStyle} >Portfolio</a></li>
                </ul>
            </div>
        );
    }
}

const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: '#282c34',
    width: '100%'
  }

const linkStyle = {
    display: 'block',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
}

const leftLi = {
    float: 'left'
}

const rightLi = {
    float: 'right'
}

export default NavBar;