import React from 'react'
import photo from '../../../assets/images/photo.jpeg';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';

import { S } from './Main_Styles';

export const Main: React.FC = () => {
  return (
    <S.Main id='home'>
      <Container>
        <FlexWrapper align='center' justify='space-around' wrap='wrap'>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>I am <span>Tumen Dambaev</span></S.Name>
            <S.MainTitle>
              <p>A Web Developer.</p>
              <Typewriter
                options={{
                  strings: ['A Web Developer,', 'A Frontend Developer'],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </S.MainTitle>
          </div>
          <Tilt scale={0.7} transitionSpeed={2500}>
            <S.PhotoWrapper>
              <S.Photo src={photo} alt="Фото" />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  )
}