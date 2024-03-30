import './Footer.css'
import React from 'react'

const Footer = () => {
  return (
    <footer>
       <div className="Footer__container">
        
            <div>
                <h4>Contacto:</h4>
                <ul className="contact-info">
                    <li>Dirección: Calle Los Alamos #143, Río Negro, Argentina</li>
                    <li>Teléfono: +123 456 789</li>
                    <li>Correo electrónico: info@phoenixcoffeeroaster.com</li>
                </ul>
            </div>
            <div>
                <h4>Horario de Atención:</h4>
                <p>Lunes a Viernes: 8:00 am - 8:00 pm</p>
                <p>Sábados y Domingos: 9:00 am - 6:00 pm</p>
            </div>
            <div>
                <h4>Seguinos en nuestras redes:</h4>
                <ul className="social-links">
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twiter</a></li>
                    <li><a href="#">YouTube</a></li>
                </ul>
            </div>
        
    </div>
    </footer>
  )
}

export default Footer