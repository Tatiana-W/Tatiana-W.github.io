import React, { useContext } from 'react'
import { Parallax } from 'react-parallax';
import parse from 'html-react-parser';
import Button from '../Button';
import './hero.scss'
import Section from '../Section';
import Modal from '../Modal';
import { walletContext } from '../../contexts/walletContext'


export default function Hero({title, mintNumber, bgUrl, heroImageUrl, variant, bubble, overlay, bgOpacity}) {
  const { account } = useContext(walletContext)

  return (
    
      <Section tag='section' className={`cs-hero cs-style1 ${variant?variant:''}`} id="hero" >
        {overlay && <Section className="cs-dark_overlay" style={{opacity:overlay}} />}
        <Section className="cs-hero_bg" style={{opacity:bgOpacity}}>
          <Parallax bgImage={bgUrl} bgImageAlt="Hero" strength={120}></Parallax>
        </Section>
        <Section className="container">
          <Section className="cs-hero_text">
          <Section tag='h2' className="cs-hero_secondary_title cs-font_24 cs-font_18_sm">{mintNumber} Total Investments</Section>
            <Section tag='h1' className="cs-hero_title cs-font_64 cs-font_36_sm cs-bold">{parse(title)}</Section>
            <Section className="cs-btn_group">
              
              {account !== ''? 
              <Modal modalType='mint' btnText='Join Now' /> :
              <Modal modalType='connect' btnText='Connect' btnIcon />}
              {/* <Button 
                btnLink='/' 
                btnText='Join the Waitlist' 
                variant='cs-color1'
              /> */}
            </Section>
            <Section tag='h3' className="cs-hero_subtitle cs-font_18 cs-font_16_sm cs-body_line_height">Together we will
              redefine Staking<br />
              Unleash the Power of Team Staking.</Section>
          </Section>
          {/* <Section className="cs-hero_img">
            <img src={heroImageUrl} alt="Hero" />
          </Section> */}
        </Section>
        {bubble && (
          <Section id="background-wrap">
            <Section className="bubble x1"></Section>
            <Section className="bubble x2"></Section>
            <Section className="bubble x3"></Section>
            <Section className="bubble x4"></Section>
            <Section className="bubble x5"></Section>
            <Section className="bubble x6"></Section>
            <Section className="bubble x7"></Section>
            <Section className="bubble x8"></Section>
            <Section className="bubble x9"></Section>
            <Section className="bubble x10"></Section>
          </Section>
        )}
      </Section>
  )
}
