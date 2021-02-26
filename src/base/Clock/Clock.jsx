import React from 'react'
import { FlipClockUnit } from './FlipClockUnit'
import styled from 'styled-components'

const StyledDiv = styled.div({
  width: '30rem',
  display: 'flex',
  margin: '6rem auto 0',
  justifyContent: 'center'
})

export const Clock = ({ days, hours, minutes, seconds }) => {
  
  return (
    <StyledDiv>
      <FlipClockUnit number={days} unit={'days'} />
      <FlipClockUnit number={hours} unit={'hours'} />
      <FlipClockUnit number={minutes} unit={'minutes'} />
      <FlipClockUnit number={seconds} unit={'seconds'} />
    </StyledDiv>
  )
}