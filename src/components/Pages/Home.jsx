import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Accordion from '../Accordion'
import Button from '../Button'
import Card from '../Card'
import ContactForm from '../ContactForm'
import ContactInfo from '../ContactInfo'
import FunFact from '../FunFact'
import Hero from '../Hero'
import IconBox from '../IconBox'
import Modal from '../Modal'
import Section from '../Section'
import SectionHeading from '../SectionHeading'
import ImageBoxSlider from '../Slider/ImageBoxSlider'
import RoadmapSlider from '../Slider/RoadmapSlider'
import Spacing from '../Spacing'
import Header from "../Header";
import Footer from "../Footer";
import Team from '../Team'

export default function Home() {
  pageTitle('Home');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const accordionData1 = [
    {
      question: 'How does staking work?',
      answer: 'Simply deposit USDC on the BSC chain through our dapp to stake. Your stake is added to the total portfolio pool which is then deployed into various avenues to generate profit.'
    },
    {
      question: 'When can I claim profit/rewards?',
      answer: 'Profits will be distributed at the start of each calendar month. You will have to visit the Dapp after this time in order to claim your profit manually. Bonus profits will be distributed at any time they are added, stay up-to-date by joining our Discord and/or Telegram communities.'
    },
    {
      question: 'Is there a guaranteed return?',
      answer: 'No, we cannot offer a guarantee due to the nature of investing and trading. However, we aim to return 10-20% per month of your principle plus bonuses.'
    }
  ]
  const accordionData2 = [
    {
      question: 'Where is the portfolio held?',
      answer: 'All stakes are held in the treasury wallet then deployed to various avenues in order to generate profit.  The portfolio is not 100% deployed; the treasury is always kept funded to ensure withdrawals can be furnished.'
    },
    {
      question: 'Is the portfolio backed 1:1? Over 100%?',
      answer: 'The initial goal of Yacht Capital is to reach a treasury that exceeds 100% of the total value staked so every staker has ROIed their stake and can exit at any time they wish.'
    }
  ]
  return (
    <>
      <Header/>
      <Hero 
        title='Yacht Capital'
        mintNumber='$9,401,098'
        bgUrl='/images/hero_bg.png'
        // heroImageUrl='/images/hero_img.png' 
        overlay='0.3'
        bgOpacity='0.4'
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
                <Spacing lg='20' md='20'/>
                <Section tag='p'>Yacht Capital is a DeFi staking DApp deployed on the BSC chain utilizing USDC. Staked USDC is deployed into various avenues, generating profit which is then distributed back to stakers regularly.</Section>
                <Section tag='p'>Costs are increasing and interest rates are through the roof, many countries are facing a "cost of living" crisis. Some people are struggling to make ends meet and this isn't right; we aim to provide a protocol you can trust, a place to earn a passive income from or rapidly grow a nest egg in, a place to take a step toward a better financial future, all from the power of DeFi.</Section>
                <Section tag='p'>Welcome to Yacht Capital!</Section>
                <Spacing lg='25' md='15'/>
                <Section className="cs-btn_group">
                  <Modal modalType='mint' btnText='Connect' />
                </Section>
              </Section>
              <Spacing lg='0' md='40'/>
            </Section>
            <Section className="col-lg-6">
              <img src="/images/ycc_logo.png" alt="About" />
            </Section>
          </Section>
        </Section>
        <Spacing lg='100' md='70'/>
      </Section>
      <Section className="container">
        <Section className="row">
          <Section className="col-lg-4">
            <IconBox 
              title='Staking' 
              subtitle='Earn up to 1.5% daily and an APR equivalent to 547%. Backed by external revenue, Wolf Capital offers unmatched earning potential. Stake $USDC and experience the future of DeFi.'
            >01</IconBox>
            <Spacing lg='25' md='25'/>
          </Section>
          <Section className="col-lg-4">
            <IconBox 
              title='Wolf Packs' 
              subtitle='Teamwork and collaboration is at the core of the Wolf Capital project. The concept of Wolf Packs elevates this by bringing users together in a team-oriented environment where the power of unity can be harnessed. By joining a Wolf Pack, users not only benefit from the community and support, but also increase their daily staking yield based on the level of their pack.'
            >02</IconBox>
            <Spacing lg='25' md='25'/>
          </Section>
          <Section className="col-lg-4">
            <IconBox 
              iconNumber='02' 
              title='Team Lottery' 
              subtitle='Join forces with your fellow Wolfpack members and reap the rewards of teamwork. At Wolf Capital, the team with the most deposits each week wins the weekly battle. This system not only incentivizes collaboration, but also adds an extra layer of excitement to your staking experience.'
            >03</IconBox>
            <Spacing lg='25' md='25'/>
          </Section>
        </Section>
      </Section>
      <Spacing lg='70' md='45'/>
      <Spacing lg='90' md='65'/>
      <Section className="container">
        <Section className="row">
          <Section className="col-lg-3 col-6">
            <FunFact 
              number='2,881'
              title='Investors'
            />
            <Spacing lg='25' md='25'/>
          </Section>
          <Section className="col-lg-3 col-6">
            <FunFact 
              number='210'
              title='Wolfpacks'
            />
            <Spacing lg='25' md='25'/>
          </Section>
          <Section className="col-lg-3 col-6">
            <FunFact 
              number='5%'
              title='Daily Return'
            />
            <Spacing lg='25' md='25'/>
          </Section>
          <Section className="col-lg-3 col-6">
            <FunFact 
              number='42.2'
              title='Volume Traded'
            />
            <Spacing lg='25' md='25'/>
          </Section>
        </Section>
      </Section>
      <Spacing lg='65' md='35'/>
      <Section className="container">
        <SectionHeading 
          title='Get Started'
          subtitle='Simple Steps'
        />
        <Spacing lg='50' md='30'/>
        <Section className="row">
          <Section className="col-xl-3 col-md-6">
            <Card 
              title='Connect Wallet'
              emoji='👋'
            />
            <Spacing lg='25' md='25'/>
          </Section>
          <Section className="col-xl-3 col-md-6">
            <Card 
              title='Deposit Desired Amounts'
              emoji='👉'
            />
            <Spacing lg='25' md='25'/>
          </Section>
          <Section className="col-xl-3 col-md-6">
            <Card 
              title='Transection Confirm'
              emoji='👍'
            />
            <Spacing lg='25' md='25'/>
          </Section>
          <Section className="col-xl-3 col-md-6">
            <Card 
              title='Recive Your Profits'
              emoji='🙂'
            />
            <Spacing lg='25' md='25'/>
          </Section>
        </Section>
      </Section>
      {/* <Section id='team'>
        <Spacing lg='70' md='40'/>
        <Section className="container">
          <SectionHeading 
            title='Meet The Team'
            subtitle='Team'
          />
          <Spacing lg='50' md='30'/>
          <Section className="row">
            <Section className="col-lg-3 col-sm-6">
              <Team 
                src='/images/member1.svg'
                name='Jeffrey Robin' 
                designation='UI Designer' 
                facebookHref='/' 
                linkedinHref='/' 
                whatsappHref='/'
              />
              <Spacing lg='25' md='25'/>
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team 
                src='/images/member2.svg'
                name='Pamela Newborn' 
                designation='FrontEnd engineer' 
                facebookHref='/' 
                linkedinHref='/' 
                whatsappHref='/'
              />
              <Spacing lg='25' md='25'/>
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team 
                src='/images/member3.svg'
                name='Jeffrey Bassett' 
                designation='Software engineer' 
                facebookHref='/' 
                linkedinHref='/' 
                whatsappHref='/'
              />
              <Spacing lg='25' md='25'/>
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team 
                src='/images/member4.svg'
                name='Steven S. Cook' 
                designation='Digital Marketing' 
                facebookHref='/' 
                linkedinHref='/' 
                whatsappHref='/'
              />
              <Spacing lg='25' md='25'/>
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team 
                src='/images/member5.svg'
                name='Diane B. Lyons' 
                designation='Digital Marketing' 
                facebookHref='/' 
                linkedinHref='/' 
                whatsappHref='/'
              />
              <Spacing lg='25' md='25'/>
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team 
                src='/images/member6.svg'
                name='Nancy Riddell' 
                designation='UI Designer' 
                facebookHref='/' 
                linkedinHref='/' 
                whatsappHref='/'
              />
              <Spacing lg='25' md='25'/>
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team 
                src='/images/member7.svg'
                name='Helen Herman' 
                designation='Product Designer' 
                facebookHref='/' 
                linkedinHref='/' 
                whatsappHref='/'
              />
              <Spacing lg='25' md='25'/>
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team 
                src='/images/member8.svg'
                name='Lindsay Baker' 
                designation='UI Designer' 
                facebookHref='/' 
                linkedinHref='/' 
                whatsappHref='/'
              />
              <Spacing lg='25' md='25'/>
            </Section>
          </Section>
        </Section>
      </Section> */}
      <Section tag='section' id='roadmap'>
        <Spacing lg='70' md='40'/>
        <Section className="container">
          <SectionHeading 
            title='Roadmap Make Unique'
            subtitle='Our Goals'
          />
          <Spacing lg='75' md='30'/>
          <Section className="cs-accent_seperator_1 cs-accent_color"></Section>
          <RoadmapSlider/>
        </Section>
      </Section>
      <Section tag='section' id='faq'>
        <Spacing lg='95' md='70'/>
        <Section className="container">
          <SectionHeading 
            title='Still have questions?'
            subtitle='FAQ'
          />
          <Spacing lg='50' md='30'/>
          <Section className="row">
            <Section className="col-lg-6">
              <Accordion variant='' data={accordionData1} openPosition={0} questionNumberStarter={1}/>
            </Section>
            <Section className="col-lg-6">
              <Accordion variant='' data={accordionData2} openPosition={false} questionNumberStarter={4}/>
            </Section>
          </Section>
        </Section>
      </Section>
      <Section id='contact'>
        <Spacing lg='95' md='70'/>
        <Section className="container">
          <SectionHeading 
            title='Get in touch'
            subtitle='Contact us'
          />
          <Spacing lg='50' md='30'/>
          <Section className="row">
            <Section className="col-lg-6">
              <ContactForm/>
            </Section>
            <Section className="col-lg-5 offset-lg-1">
            <Spacing lg='30' md='40'/>
              <ContactInfo/>
            </Section>
          </Section>
        </Section>
        <Spacing lg='100' md='70'/>
      </Section>
      <Footer/>
    </>
  )
}
