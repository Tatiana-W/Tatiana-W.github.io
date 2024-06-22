import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Cta from '../Cta'
import Section from '../Section'
import './footer.scss'

export default function Footer() {
  return (
    <Section tag='footer' className="cs-footer_wrap cs-bg" style={{backgroundImage:''}}>
      <Section className="container">
        <Cta/>
      </Section>
      <Section tag='footer' className="cs-footer text-center">
        <Section className="container">
          <Section className="cs-height_25 cs-height_lg_25" />
        </Section>
        <Section className="container">
          <Section className="cs-copyright text-center">Copyright © 2024. All Rights Reserved by <span className="cs-primary_font cs-primary_color">Yacht Capital</span></Section>
        </Section>
        <Section className="cs-height_25 cs-height_lg_25" />
      </Section>
    </Section>
  )
}
