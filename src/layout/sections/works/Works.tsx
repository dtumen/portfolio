import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper';
import Work from './work/Work';

import socialImg from '../../../assets/images/proj-1.png';
import timerImg from '../../../assets/images/proj-2.png';
import { Container } from '../../../components/Container';
import TabMenu from './tabMenu/TabMenu';

const WORKSITEMS = ['All', 'landing page', 'React', 'spa'];
const WORKTEXT = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

export default function Works() {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={WORKSITEMS}/>
        <FlexWrapper justify='space-between' align='flex-start'>
          <Work title='Social Network' text={WORKTEXT} imageSrc={socialImg} alt='Social NetWork'/>
          <Work title='Timer'text={WORKTEXT} imageSrc={timerImg} alt='Timer'/>
        </FlexWrapper>
      </Container>
    </StyledWorks>
  )
}


const StyledWorks = styled.section``;