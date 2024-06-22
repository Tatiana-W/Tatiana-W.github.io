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
    <Spacing lg='100' md='70'/>
    <Section id='contact'>
    </Section>
    <Footer/>
  </>
  )
}
