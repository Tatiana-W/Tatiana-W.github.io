import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Accordion from '../Accordion'
import Button from '../Button'
import CardStype3 from '../Card/CardStype3'
import ContactForm from '../ContactForm'
import ContactInfo from '../ContactInfo'
import FunFact from '../FunFact'
import HeroStyle2 from '../Hero/HeroStyle2'
import IconBox from '../IconBox'
import Modal from '../Modal'
import Section from '../Section'
import SectionHeading from '../SectionHeading'
import BlogSlider from '../Slider/BlogSlider'
import ImageBoxSliderStyle1 from '../Slider/ImageBoxSliderStyle1'
import RoadmapSlider from '../Slider/RoadmapSlider'
import TeamSlider from '../Slider/TeamSlider'
import Spacing from '../Spacing'
import Header from "../Header2";
import Footer from "../Footer2";


export default function Home3() {
  pageTitle('Yacht Capital - Coming Soon');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <Header/>
    <HeroStyle2 
      title='Yacht Capital'
      bgUrl='/images/hero_bg.png'
      variant='cs-type2 text-center'
      overlay='0.3'
      bubble
    />
      <Section tag='section' id='about'>
        <Spacing lg='100' md='70'/>
        <Section className="container">
          <Section className="row align-content-center">
            <Section className="col-lg-6">
              <Section className='cs-right_space_40'>
                <SectionHeading 
                  title='About Us'
                  subtitle='Our Story'
                />
                <Spacing lg='25' md='20'/>
                <Section tag='p' className="cs-font_14"></Section>
                <Section tag='p' className="cs-font_24 cs_line_height_2">Yacht Capital is a DeFi staking DApp deployed on the BSC chain utilizing USDC. Staked USDC is deployed into various avenues, generating profit which is then distributed back to stakers regularly.</Section>
                <Section tag='p' className="cs-font_24 cs_line_height_2">Costs are increasing and interest rates are through the roof, many countries are facing a "cost of living" crisis. Some people are struggling to make ends meet and this isn't right; we aim to provide a protocol you can trust, a place to earn a passive income from or rapidly grow a nest egg in, a place to take a step toward a better financial future, all from the power of DeFi.</Section>
                <Section tag='p' className="cs-font_24 cs_line_height_2">Welcome to Yacht Capital!</Section>
                <Spacing lg='25' md='15'/>
              </Section>
              <Spacing lg='0' md='40'/>
            </Section>
            <Section className="col-lg-6">
              <img src="/images/yacht_stats.png" alt="About" />
            </Section>
          </Section>
        </Section>
        <Spacing lg='100' md='70'/>
      </Section>
    <Spacing lg='100' md='70'/>
    <Section id='contact'>
    </Section>
    <Footer/>
  </>
  )
}
