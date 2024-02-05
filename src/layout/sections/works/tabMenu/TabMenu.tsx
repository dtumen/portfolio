import React from 'react'
import styled from 'styled-components'
import { Link } from '../../../../components/Link'

type MenuPropsType = {
  menuItems: Array<string>
}

export default function TabMenu(props: MenuPropsType) {
  return (
    <StyledTabMenu>
          <ul>
            {props.menuItems && props.menuItems.map((item, i) => (
              <ListItem key={i}>
                <Link href="#">{item}</Link>
              </ListItem>
            ))}
          </ul>
  </StyledTabMenu>
  )
}

const StyledTabMenu = styled.nav`
  margin-bottom: 40px;
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`

const ListItem = styled.li`

`
