import React from 'react'
import styled from 'styled-components'

type MenuPropsType = {
  menuItems: Array<string>
}

export default function Menu(props: MenuPropsType) {
  return (
    <StyledMenu>
    <ul>
      {props.menuItems && props.menuItems.map((item, i) => (
        <li key={i}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`