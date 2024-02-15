import React, { useState } from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import { S } from './Works_Styles';
import { motion, AnimatePresence } from "framer-motion"

import { Container } from '../../../components/Container';
import TabMenu, { TabsStatusType } from './tabMenu/TabMenu';

// import { workData, tabMenuItems } from '../../../utils/datas';
import socialImg from '../../../assets/images/proj-1.png';
import timerImg from '../../../assets/images/proj-2.png';
const LoremText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim';

const tabsItems: Array<{ title: string, status: TabsStatusType }> = [
  {
    title: 'All',
    status: 'all',
  },
  {
    title: 'Landing page',
    status: 'landing',
  },
  {
    title: 'React',
    status: 'react',
  },
  {
    title: 'SPA',
    status: 'spa',
  },
];

const workData = [
  {
    title: 'Social Network',
    text: LoremText,
    imageSrc: socialImg,
    alt: 'Social NetWork',
    type: 'spa',
    id: 1,
  },

  {
    title: 'Timer',
    text: LoremText,
    imageSrc: timerImg,
    alt: 'Timer',
    type: 'react',
    id: 2,
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState('all');
  let filteredWorks = workData;

  if (currentFilterStatus === 'landing') {
    filteredWorks = workData.filter(work => work.type === 'landing')
  }

  if (currentFilterStatus === 'react') {
    filteredWorks = workData.filter(work => work.type === 'react')
  }

  if (currentFilterStatus === 'spa') {
    filteredWorks = workData.filter(work => work.type === 'spa')
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id='works'>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus} />
        <FlexWrapper justify='space-between' align='flex-start' wrap='wrap'>

          <AnimatePresence>
            {
              filteredWorks && filteredWorks.map((w) => (
                <motion.div style={{  width: '400px', flexGrow: 1, maxWidth: "540px"}} 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={w.id}
                >
                  <Work title={w.title} 
                        text={w.text} 
                        imageSrc={w.imageSrc} 
                        alt={w.alt} 
                        key={w.id} />
                </motion.div>
              ))
            }
          </AnimatePresence>

        </FlexWrapper>
      </Container>
    </S.Works>
  )
}


