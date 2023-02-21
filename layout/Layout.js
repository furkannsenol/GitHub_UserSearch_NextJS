import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar/>
            <div style={{ marginBottom: 100 }}/>
            {children}
            
            <Footer />
            <div style={{marginTop:150}}></div>
        </React.Fragment>
    )
}

export default Layout