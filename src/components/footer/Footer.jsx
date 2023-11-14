import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h1 className="footer-title">BK Dev</h1>

                <ul className="footer-list">
                    <li>
                        <a href="#about" className="footer-link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer-link">Projects</a>
                    </li>
                    <li>
                        <a href="#avis" className="footer-link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer-social">
                    <a href="https://github.com/BAKALIDOU8/crazy-burger" className="footer-social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/bakalidou8-/" className="footer-social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://fr.react.dev/" className="footer-social-link" target="_blank">
                        <i className="bx bxl-react"></i>
                    </a>
                </div>

                <span className="footer-copy">&#169; BK Dev. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer