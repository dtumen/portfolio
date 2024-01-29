import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import Menu from '../../../components/menu/Menu'
import { FlexWrapper } from '../../../components/FlexWrapper';
import Work from './work/Work';

import socialImg from '../../../assets/images/proj-1.png';
import timerImg from '../../../assets/images/proj-2.png';

const WORKSITEMS = ['All', 'landing page', 'React', 'spa'];
const WORKTEXT = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

export default function Works() {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={WORKSITEMS}/>
      <FlexWrapper justify='space-around'>
        <Work title='Social Network' text={WORKTEXT} imageSrc={socialImg} alt='Social NetWork'/>
        <Work title='Timer'text={WORKTEXT} imageSrc={timerImg} alt='Timer'/>
      </FlexWrapper>
    </StyledWorks>
  )
}


const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #deefff;
`