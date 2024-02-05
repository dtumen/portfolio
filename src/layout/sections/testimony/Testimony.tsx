import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import Icon from '../../../components/icon/Icon'
import Slider from '../../../components/Slider'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { IconWrapper } from '../skills/skill/Skill'

export default function Testimony() {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper align='center' direction='column'>
        <IconWrapper>
          <Icon iconId={'quote'} />
        </IconWrapper>
        <Slider />
      </FlexWrapper>
    </StyledTestimony>
  )
}


const StyledTestimony = styled.section`
  background-color: #aeb9ff;
  min-height: 50vh;

  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`