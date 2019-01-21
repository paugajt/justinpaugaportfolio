import React, { Component } from 'react';
import springboot from '../../Photos/springboot.png'

class Springboot extends Component {
    render() {
        return (
            <div className='project' style={{width: '20%'}}>
                <h1><a href='https://rebelscrum.herokuapp.com/' target='_blank'>SpringBoot Web Application</a></h1>
                <p>Database web application built using Spring Boot framework, Java, HTML, and CSS. Developed using Agile development techniques with my Scrum group, RebelScrum.</p>
                <a href='https://rebelscrum.herokuapp.com/students' target='_blank'><img src={springboot} style={{width: '300px', height:'200px'}} /> </a>
                <p>This application stores users as professors, students or administrators. It also keeps track of courses, sections, buildings and classrooms. Functionality includes creating a schedule based on a semester and year as well as assigning professors to a section of a course and allowing students to sign up for sections.</p>
            </div>
        )
    }
}

export default Springboot;