import React from 'react'
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';

import { S } from '../Skills_Styles';

type SkillPropsType = {
  iconId: string
  title: string
  description: string
}


export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <FlexWrapper direction='column' align='center'>
        <S.IconWrapper>
          <Icon iconId={props.iconId} width='50px' height='50px'/>
        </S.IconWrapper>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.description}</S.Text>
      </FlexWrapper>
    </S.Skill>
  )
}