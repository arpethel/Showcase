import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/ryanpethel" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://www.github.com/arpethel" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="mailto:ryan.pethel@outlook.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>Ryan Pethel, 2019</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
