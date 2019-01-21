import React, { Component } from 'react';
import Springboot from '../Components/Projects/Springboot';

class Portfolio extends Component {
    render() {
        return (
            <div id='portfolio' style={{paddingTop: '175px'}}>
                <div style={{background: '#5b6e91'}}>
                <h1 style={headerStyle}><span style={spanStyle}>Portfolio</span></h1>
                <Springboot />
                </div>
            </div>
        )
    }
}

const headerStyle = { 
    width:'100%', 
    textAlign:'center', 
    borderBottom: '1px solid #000', 
    lineHeight:'1em', 
    margin:'10px 0 20px',
    background: 'black' 
}

const spanStyle = {  
    padding:'0 10px' 
}
export default Portfolio;