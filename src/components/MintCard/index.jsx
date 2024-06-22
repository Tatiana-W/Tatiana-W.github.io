import { Icon } from '@iconify/react'
import React, { useContext, useState } from 'react'
import Section from '../Section'
import { mint } from '../../utils/web3mint'
import { toast } from 'react-toastify'
import { walletContext } from '../../contexts/walletContext'

export default function MintCard() {
  const [counter, setCounter] = useState(1)
  const { setMint } = useContext(walletContext)
  const handelSubtract = () => {
    if(counter>1) {
      setCounter(counter-1)
    }
  }

  const handleMint = async () => {
    let txn = await mint(counter)
    if(txn.hash.length > 0){
      toast.success(`Deposit Successful`)
      setMint(mint => !mint)
    }
  }
  return (
    <Section className="cs-mint_secton">
      <Section tag='h2' className="cs-font_22 text-uppercase cs-normal cs-m0 text-center">Join Yacht Capital<br />to start earning</Section>
      <Section className="cs-height_25 cs-height_lg_25" />
      {/* <Section className="cs-mint_avatar text-center"><img src="/images/avatar_1.png" alt="" /></Section> */}
      <Section className="cs-height_50 cs-height_lg_30" />
      <ul className="cs-list cs-style2 cs-mp0 cs-primary_color cs-primary_font">
        {/* <li>
          <Section className="cs-list_left">Remaining</Section>
          <Section className="cs-list_right">1 / 725 Minted</Section>
        </li> */}
        <li>
          <Section className="cs-list_left">Amount:</Section>
          <Section className="cs-list_right">
            <input type="number" className="cs-form_field" />
          </Section>
        </li>
        <li>
          <Section className="cs-list_left">Total Price</Section>
          <Section className="cs-list_right">0.001 SepoliaETH</Section>
        </li>
      </ul>
      <Section className="cs-height_25 cs-height_lg_25" />
      <button onClick={handleMint} className="cs-btn cs-btn_filed cs-accent_btn text-center text-uppercase w-100"><span>Join Now</span></button>
      <Section className="cs-height_15 cs-height_lg_15" />
    </Section>
  )
}
