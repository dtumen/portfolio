import React from 'react';
import { FlexWrapper } from '../FlexWrapper';

import { S } from './Slyder_Styles';

const SLIDEMOCK = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  name: '@ivan ivanow',
}

export const Slider: React.FC = () => {
  return (
    <S.StyledSlider>
      <FlexWrapper>
        <S.Slide>
          <S.Text>{SLIDEMOCK.text}</S.Text>
          <S.Name>{SLIDEMOCK.name}</S.Name>
        </S.Slide>
      </FlexWrapper>
      <S.Pagination>
        <span></span>
        <span className={'active'}></span>
        <span></span>
      </S.Pagination>
    </S.StyledSlider>
  )
}
