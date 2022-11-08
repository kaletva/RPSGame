import React from 'react'
import Score from './Score'
import Logo from './media/logo.svg'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  border: solid 2px rgba(255, 255, 255, 0.473);
  border-radius: 15px;
  padding: 25px;
  width: 50%;
`

const ScoreContainer = styled.div`
  border-radius: 15px;
  background-color: white;
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
`



const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <ScoreContainer>
        <Score/>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header