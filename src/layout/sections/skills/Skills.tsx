import React from 'react'
import styled from 'styled-components'


import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import Skill from './skill/Skill'
import { Container } from '../../../components/Container'

const DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'

export default function Skills() {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap='wrap' justify='space-between'>
          <Skill iconId={'html'} title='html5' description={DESCRIPTION}/>
          <Skill iconId={'css'} title='css3' description={DESCRIPTION}/>
          <Skill iconId={'react'} title='React' description={DESCRIPTION}/>
          <Skill iconId={'typeScript'} title='typescript' description={DESCRIPTION}/>
          <Skill iconId={'styled'} title='styled components' description={DESCRIPTION}/>
          <Skill iconId={'web'} title='WEB DESIgN' description={DESCRIPTION}/>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`

`