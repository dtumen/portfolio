import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconWrapper } from '../skills/Skills_Styles';
import { Container } from '../../../components/Container'

export const Testimony: React.FC = () => {
  return (
    <StyledTestimony id='testimony'>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper align='center' direction='column'>
          <IconWrapper>
            <Icon iconId={'quote'} />
          </IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  )
}


const StyledTestimony = styled.section`
  position: relative;
  background-color: #aeb9ff;
  min-height: 50vh;

  ${IconWrapper} {
    margin: 28px 0 72px;
  }
`