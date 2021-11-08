import React from 'react'
import {Head1} from './ProjectStyles'
import {Container, Col, Row} from 'react-bootstrap'
import Project from './Project'
import {projects} from '../../constants/constants'

const Projects = () => {
    return (
        <div  className='py-5'>
           <Container>
               <Row>
                   <Col>
                        <Head1 className='my-5'>
                            Projects
                        </Head1>
                    </Col>
                </Row>
                <Row  className='my-5'> 
                    {
                        projects.map((item,index) => {
                            return (
                                <Project title={item.title} description={item.description}  img={item.image}/>
                            )
                        })
                    }
                </Row>
            </Container> 
        </div>
    )
}

export default Projects
