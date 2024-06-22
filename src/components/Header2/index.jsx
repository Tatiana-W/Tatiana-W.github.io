import React, { useContext, useState } from 'react'
import { Icon } from '@iconify/react'
import { Link as ScrollLink } from 'react-scroll'
import Modal from '../Modal';
import ModeSwitch from '../ModeSwitch';
import Section from '../Section';
import './header.scss'
import { walletContext } from '../../contexts/walletContext'

export default function Header() {
  const [mobileToggle, setMobileToggle] = useState(false)
  const { account } = useContext(walletContext)
  
  return (
    <>
      <Section tag='header' className="cs-site_header cs-style1 cs-sticky-header cs-primary_color">
        <Section className="cs-main_header">
          <Section className="container">
            <Section className="cs-main_header_in">
              <Section className="cs-main_header_left">
                  <img src="/images/logo_dark.png" alt="Logo" className="cs-hide_dark" />
                  <img src="/images/logo_dark.png" alt="Logo" className="cs-hide_white" />
              </Section>
              <Section className="cs-main_header_center">
              </Section>
              <Section className="cs-main_header_right">
                <Section className="cs-toolbox">
                  <ModeSwitch />
                </Section>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </>
  )
}
