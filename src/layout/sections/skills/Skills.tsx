import React from 'react'
import styled from 'styled-components'


import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import Skill from './skill/Skill'

const DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'

export default function Skills() {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper wrap='wrap' justify='space-between'>
        <Skill iconId={'html'} title='html5' description={DESCRIPTION}/>
        <Skill iconId={'css'} title='css3' description={DESCRIPTION}/>
        <Skill iconId={'react'} title='React' description={DESCRIPTION}/>
        <Skill iconId={'typeScript'} title='typescript' description={DESCRIPTION}/>
        <Skill iconId={'styled'} title='styled components' description={DESCRIPTION}/>
        <Skill iconId={'web'} title='WEB DESIgN' description={DESCRIPTION}/>
      </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  background-color: #ffe5e4;
  min-height: 100vh;
`