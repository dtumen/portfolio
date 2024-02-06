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
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li`

`
