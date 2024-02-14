import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import '../../styles/slider.css';

import { S } from './Slyder_Styles';

const TEXTMOCK = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

type SlidePropsType = {
  text?: string
  userName?: string | 'Tumen Dambaev'
}

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <S.Text>{props.text}</S.Text>
      <S.Name>@{props.userName}</S.Name>
  </S.Slide>
  )
}

const items = [
    <Slide userName='Tumen Dambaev' text={TEXTMOCK}/>,
    <Slide userName='Tumen Badmaev' text={TEXTMOCK}/>,
    <Slide userName='Aldar Shirapov' text={TEXTMOCK}/>,
];

export const Slider = () => (
  <S.StyledSlider>
    <AliceCarousel
        mouseTracking
        items={items}
    />
  </S.StyledSlider>
);

/*
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

*/