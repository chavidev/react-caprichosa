import React from 'react'
import NavegationLinks from '../components/NavegationLinks'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="navegation-links">
          <span className="footer-title">Quick Links</span>
          <NavegationLinks />
        </div>
        <div>
          <span className="footer-title">New release</span>
          <p>
            The solution to
            <br />
            your sexy, plus size lingere
            <br />
            is in Picky.es.
          </p>
        </div>
        <div>
          <span className="footer-title">On January 2022 Jump</span>
          <img src="" alt="" />
        </div>
      </footer>
    </>
  )
}

export default Footer
//########################################
