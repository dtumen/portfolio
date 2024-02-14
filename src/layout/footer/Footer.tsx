import React from 'react';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { socialItemsData } from '../../utils/datas';
import { S } from './Footer_Styles';

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper align='center' direction='column'>
        <S.Name>Tumen</S.Name>
        <S.SocialList>

          {
            socialItemsData && socialItemsData.map((s, i) => (
              <S.SocialItem key={i}>
                <S.SocialLink>
                  <Icon height='21px' width='21px' viewBox='0 0 21px 21px' iconId={s.iconId} />
                </S.SocialLink>
              </S.SocialItem>
            ))
          }
          
        </S.SocialList>
        <S.Copyright>© 2023 Tumen Dambaev, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  )
}