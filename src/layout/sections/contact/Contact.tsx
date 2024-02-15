import React, { ElementRef, useRef } from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container';
import emailjs from '@emailjs/browser';

import { S } from './Contact_Styles'

export const Contact: React.FC = () => {
  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_bshzwq5', 'template_yraqj63', form.current, {
        publicKey: '6Znk9OaPm7EhNX8RQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <S.Contacts id='contact'>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder='name' name={'user_name'} />
          <S.Field required placeholder='email' name={'email'} type='email' />
          <S.Field required placeholder='subject' name={'subject'} />
          <S.Field required as={'textarea'} placeholder={'message'} name={'message'} />
          <Button type={'submit'}>Send message</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  )
}
