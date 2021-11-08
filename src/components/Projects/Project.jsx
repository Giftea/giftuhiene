import React from 'react'
import {Project} from './ProjectStyles'
import {Col} from 'react-bootstrap'

const Projects = ({title, description,img}) => {
    return (
        <Col md={6} className="project d-flex justify-content-center align-items-center my-5" >
            <div className="project-card w-100 d-flex justify-content-center align-items-center flex-column">
                <div className="imgBx">
                    <img src={img} className='w-100 h-100' />
                </div>
                <div className="content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </Col>
    )
}

export default Projects
