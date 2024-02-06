import React from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import { S } from './Works_Styles';

import { Container } from '../../../components/Container';
import TabMenu from './tabMenu/TabMenu';

import { workData, tabMenuItems } from '../../../utils/datas';

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={tabMenuItems}/>
        <FlexWrapper justify='space-between' align='flex-start' wrap='wrap'>
          {
            workData && workData.map((w, i) => (
              <Work title={w.title} text={w.text} imageSrc={w.imageSrc} alt={w.alt} key={i} />    
            ))
          }
        </FlexWrapper>
      </Container>
    </S.Works>
  )
}


