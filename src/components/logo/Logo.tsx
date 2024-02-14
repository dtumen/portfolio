import React from 'react'
import { Icon } from '../icon/Icon'
import { animateScroll } from 'react-scroll'

export default function Logo() {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a onClick={() => {animateScroll.scrollToTop()}}>
      <Icon iconId={'html'}/>
    </a>
  )
};
