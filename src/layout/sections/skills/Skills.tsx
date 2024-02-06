import React from 'react';


import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { Skill } from './skill/Skill';

import { S } from './Skills_Styles'

// skills:
import { skillData } from '../../../utils/datas';


export const Skills: React.FC = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap='wrap' justify='space-between'>
          {skillData && skillData.map((el, i) => (
              <Skill iconId={el.iconId} title={el.title} description={el.description} key={i}/>
          ))}
        </FlexWrapper>
      </Container>
    </S.Skills>
  )
}

