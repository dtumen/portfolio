import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'

export default function Contact() {
  return (
    <StyledContact>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder='name' />
        <Field placeholder='subject' />
        <Field as={'textarea'} placeholder='message' />
        <Button>Send message</Button>
      </StyledForm>
    </StyledContact>
  )
}

const StyledContact = styled.section`  
  min-height: 50vh;
  background-color: #fffae1;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 540px;
  width: 100%;
  margin: 0 auto;
`

const Field = styled.input`
  
`