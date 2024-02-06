import React from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'

import { S } from './Contact_Styles'

export const Contact: React.FC = () => {
  return (
    <section>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form>
          <S.Field placeholder='name' />
          <S.Field placeholder='subject' />
          <S.Field as={'textarea'} placeholder='message' />
          <Button>Send message</Button>
        </S.Form>
      </Container>
    </section>
  )
}
