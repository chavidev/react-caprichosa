import React from 'react'
import NavegationLinks from '../components/NavegationLinks'
import { Carousel, Image } from 'antd'

const Footer = () => {
  const contentStyle = {
    height: '113px',
    width: '166px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
  }
  return (
    <>
      <footer>
        <div className="navegation-links">
          <span className="footer-title">Quick Links</span>
          <NavegationLinks />
        </div>
        <div>
          <span className="footer-title">New release</span>
          <p className="footer-release">
            The solution to
            <br />
            your sexy, plus size lingere
            <br />
            is in Picky.es.
          </p>
        </div>
        <div>
          <span className="footer-title">On January 2022 Start</span>
          <img src="" alt="" />
          {/* el carrusel ha de ir en un componente externo */}
          <div className="carrusel" style={{ width: '133px' }}>
            {/* style={{ width: '133px'; z-index:'2' }} ¿cómo le pondría dos? se qeu está mal, pero quiero ser capaz de hacerlo*/}
            <Carousel autoplay>
              <div>
                <Image width={166} src={'img/1.jpg'} />
              </div>
              <div>
                <Image width={166} src={'img/2.jpg'} />
              </div>
              <div>
                <Image width={166} src={'img/3.jpg'} />
              </div>
              <div>
                <Image width={166} src={'img/4.jpg'} />
              </div>
              <div>
                <Image width={166} src={'img/5.jpg'} />
              </div>
              <div>
                <Image width={166} src={'img/6.jpg'} />
              </div>
            </Carousel>
          </div>
        </div>
      </footer>
      <p className="footer-derechos">
        @2012 AcmeWidgets. All Rights Reserved. Support: Support @ AcmeWidgets.com
      </p>
    </>
  )
}

export default Footer
