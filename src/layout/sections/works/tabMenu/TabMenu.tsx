import React from 'react'
import styled from 'styled-components'
import { Link } from '../../../../components/Link'

export type TabsStatusType = 'all' | 'landing' | 'react' | 'spa'

type MenuPropsType = {
  tabsItems: Array<{title: string, status: TabsStatusType}>
  changeFilterStatus: (value: TabsStatusType) => void
  currentFilterStatus: string
}

export default function TabMenu(props: MenuPropsType) {
  return (
    <StyledTabMenu>
          <ul>
            {props.tabsItems && props.tabsItems.map((item, i) => (
              <ListItem key={i}>
                <Link active={props.currentFilterStatus === item.status} as={'button'} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</Link>
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
