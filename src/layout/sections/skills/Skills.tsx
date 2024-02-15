import React from 'react';


import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { Skill } from './skill/Skill';
import { Fade } from "react-awesome-reveal";

import { S } from './Skills_Styles'

// skills:
import { skillData } from '../../../utils/datas';


export const Skills: React.FC = () => {
  return (
    <S.Skills id='skills'>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap='wrap' justify='space-between'>
          <Fade cascade={true} damping={.2}>
          {skillData && skillData.map((el, i) => (
              <Skill iconId={el.iconId} title={el.title} description={el.description} key={i}/>
          ))}
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  )
}

