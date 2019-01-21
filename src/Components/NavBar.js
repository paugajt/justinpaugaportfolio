import React, { Component } from 'react';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollingLock: false,
            height: window.innerHeight - 900,
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.updateDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.updateDimensions)
    }

    updateDimensions() {
        this.setState({height: window.innerHeight - 900})
        console.log(this.state.height)
    }
    handleScroll() {
        if (window.scrollY > window.innerHeight + 900) {
            this.setState({
                scrollingLock: true,
            });
            
        } 
        else if (window.scrollY < window.innerHeight) {
            this.setState({
                scrollingLock: false,
            });
        }
    }
    render() {
        return (
            <div className='navbar' style={{width: '100%', position: this.state.scrollingLock ? 'fixed' : 'relative', top: this.state.scrollingLock ? '0' : this.state.height}}>
                <ul style={ulStyle}>
                    <li style={leftLi}><a href='#home' style={linkStyle}>Home</a></li>
                    <li style={leftLi}><a href='#projects' style={linkStyle}>Projects</a></li>
                    <li style={leftLi}><a href='#resume' style={linkStyle}>Resume</a></li>
                    <li style={rightLi}><a href='#about' style={linkStyle}>About Me</a></li>
                    <li style={rightLi}><a href='#contact' style={linkStyle}>Contact</a></li>
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
    backgroundColor: '#111111',
    width: '100%'
  }

const linkStyle = {
    display: 'block',
    backgroundColor: '#111111',
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