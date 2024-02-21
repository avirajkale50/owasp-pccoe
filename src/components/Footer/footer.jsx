import React from 'react'
import {BsInstagram } from 'react-icons/bs';
import { BsDiscord } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { AiOutlineHeart } from 'react-icons/ai';
import './footer.css';
import IMG from '../../assets/main.png'
import IMG1 from '../../assets/name__logo1.png'
const Footer = () => {
  return (
    <div>
    <div className='flag'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, pariatur?</p>
    </div>
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <div className="foot__logo__style">
              <img  className="foot__logo"src={IMG} alt="footerlogo" />
              <img  className="foot__logo__name"src={IMG1} alt="footerlogoname" />
              </div>
          
          </div>
         
          <div className="sb__footer-links-div">
          <h4>IMP Website</h4>
            <a href="https://owasp.org/" target='_blank' rel="noreferrer">
              <p>Owasp</p>
            </a>
            <a href="http://www.pccoepune.com/" target='_blank' rel="noreferrer">
              <p>PCCoE</p>
            </a>
            <a href="https://questcon.ctfd.io/" target='_blank' rel="noreferrer">
              <p>CTF</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
          <h4>Our Work</h4>
            <a href="https://owasp.org/www-chapter-pimpri-chinchwad-college-of-engineering/" target='_blank' rel="noreferrer">
              <p>Github</p>
            </a>
            <a href="https://questcon.ctfd.io/rules" target='_blank' rel="noreferrer">
              <p>Rules</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
          <h4>Social Media</h4>
           <div className="socialmedia">
              <a href="https://instagram.com/pccoe_owasp?igshid=MzRlODBiNWFlZA==" target='_blank' rel="noreferrer" ><BsInstagram/></a>
              <a href="https://discord.gg/Rne235NgAT" target='_blank' rel="noreferrer" ><BsDiscord /></a>
              <a href="https://instagram.com/pccoe_owasp?igshid=MzRlODBiNWFlZA==" target='_blank' rel="noreferrer" ><AiOutlineYoutube /></a>
              <a href="https://twitter.com/pccoe_owasp" target='_blank' rel="noreferrer" ><FaXTwitter /></a>
              <a href="https://whatsapp.com/channel/0029Va5NvZ14o7qHYipm0b2A" target='_blank' rel="noreferrer" ><BsWhatsapp /></a>
           </div>
          </div>
        </div>
        <hr/>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getUTCFullYear()} Owasp All right reserved...
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms"><div><p>Made with <AiOutlineHeart/> by Owasp</p></div></a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
