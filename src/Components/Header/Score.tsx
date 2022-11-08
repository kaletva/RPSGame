import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../hook'

const ScoreContainer = styled.div`
  display: flex;
    flex-direction: column;
    gap: 5px;
`

const Score = () => {
  const score = useAppSelector(slices => slices.gameSlice.score)
  return (
    <ScoreContainer>
      <p>score</p>
      <h1>{score}</h1>
    </ScoreContainer>
  )
}

export default Score