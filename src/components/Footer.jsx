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
          <span className="footer-title">Titulo del texto</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde incidunt maiores
            corrupti eos. Modi porro error voluptate totam neque labore pariatur molestias vero? Id
            doloribus aliquam dolore laboriosam optio.
          </p>
        </div>
        <div>
          <span className="footer-title">Titulo del texto</span>
          <img src="" alt="" />
        </div>
      </footer>
    </>
  )
}

export default Footer
//########################################
