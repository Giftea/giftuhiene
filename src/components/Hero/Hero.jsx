import React from 'react'
import {HeroContainer, Head1, Head4, P} from './HeroStyles'
import {Container, Row, Col} from 'react-bootstrap';
import {Ellipse1, Ellipse2, Ellipse3, Ellipse4, Ellipse5, Ellipse6} from '../../constants/constants'

const Hero = () => {
    return (
        <HeroContainer>
            <Container className='h-75' >
                <Row className='justify-content-center align-items-center  h-100'>
                    <Col className='pt-5'>
                        <Head1 className='animate__animated animate__backInDown animate__delay-3s'>Uhiene Gift</Head1>
                        <Head4 className='animate__animated animate__fadeIn animate__delay-4s'>Developer. Writer. Educator.</Head4>
                        <P className='animate__animated animate__fadeIn animate__delay-4s'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Reprehenderit dolores volupta.</P>
                    </Col>
                </Row>
            </Container>
            <img className='animate__animated animate__swing animate__infinite animate__slower animate__delay-5s d-lg-block d-none ball' src={Ellipse1}/>
            <img className='animate__animated animate__swing animate__infinite animate__slower animate__delay-5s d-lg-block d-none ball2' src={Ellipse2}/>
            <img className='animate__animated animate__swing animate__infinite animate__slower animate__delay-5s d-lg-block d-none ball3' src={Ellipse3}/>
            <img className='animate__animated animate__swing animate__infinite animate__slower animate__delay-5s d-lg-block d-none ball4' src={Ellipse4}/>
            <img className='animate__animated animate__swing animate__infinite animate__slower animate__delay-5s d-lg-block d-none ball5' src={Ellipse5}/>
            <img className='animate__animated animate__swing animate__infinite animate__slower animate__delay-5s d-lg-block d-none ball6' src={Ellipse5}/>

            <img className='animate__animated animate__swing animate__infinite animate__slower animate__delay-5s d-lg-none  ball6' src={Ellipse2}/>
            <img className='animate__animated animate__swing animate__infinite animate__slower animate__delay-5s d-lg-none  ball6' src={Ellipse2}/>
            <img className='animate__animated animate__swing animate__infinite animate__slower animate__delay-5s d-lg-none  ball6' src={Ellipse2}/>
            <img className='animate__animated animate__swing animate__infinite animate__slower animate__delay-5s d-lg-none  ball6' src={Ellipse2}/>
            <img className='animate__animated animate__swing animate__infinite animate__slower animate__delay-5s d-lg-none  ball6' src={Ellipse2}/>

        </HeroContainer>
    )
}

export default Hero
