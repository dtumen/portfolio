import React from 'react';
import { Link } from '../../../../components/Link';
import { Button } from '../../../../components/Button';

import { S } from '../Works_Styles';

type WorkPropsTypes = {
  imageSrc: string
  title: string
  text: string
  alt: string
}

export const Work: React.FC<WorkPropsTypes> = (props: WorkPropsTypes) => {
  return (
    <S.Work>
      <S.ImageWrapper>
        <S.Image src={props.imageSrc} alt={props.alt} />
        <Button>view project</Button>
      </S.ImageWrapper>
      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <Link active href="">demo</Link>
        <Link href="">code</Link>
      </S.Description>
    </S.Work>
  )
}
