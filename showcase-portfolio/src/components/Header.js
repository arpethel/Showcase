import React from 'react'

import Footer from './Footer'
import logo from '../assets/images/profile_pic.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={logo} alt="" /></a>
                    <h1><strong>I'm Ryan</strong>, a transitioning <br />
                    service member, and I <br />
                    love to code.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
