import React from 'react'

import Footer from '../components/Layouts/Footer'
import Header from '../components/Layouts/NavBar'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
