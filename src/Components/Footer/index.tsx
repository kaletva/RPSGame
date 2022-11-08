import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Rules from './image-rules.svg'
const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: flex-end;
`
const FooterButton = styled.button`
    background-color: transparent;
    border: solid 1.5px white;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    text-transform: uppercase;
`

const RulesBlur = styled(motion.div)`
  backdrop-filter: blur(4px);
  top: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`
const RulesContainer = styled(motion.div)`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 40px;
  border-radius: 15px;
  padding: 45px;
`
const RulesHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const Footer = () => {
  const [openRules, setOpenRules] = useState(false)
  return (
    <>
      {openRules ?
        <RulesBlur initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <RulesContainer initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.5}}>
            <RulesHeader>
              <h1>RULES</h1>
              <button onClick={() => setOpenRules(false)}>X</button>
            </RulesHeader>
            <Rules />
          </RulesContainer>
        </RulesBlur> : ''}
      <FooterContainer>
        <FooterButton onClick={() => setOpenRules(true)}>rules</FooterButton>
      </FooterContainer>
    </>
  )
}

export default Footer