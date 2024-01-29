import React from 'react'
import styled from 'styled-components'

type WorkPropsTypes = {
  imageSrc: string
  title: string
  text: string
  alt: string
}

export default function Work(props: WorkPropsTypes) {
  return (
    <StyledWord>
      <Image src={props.imageSrc} alt={props.alt} />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href="">demo</Link>
      <Link href="">code</Link>
    </StyledWord>
  )
}

const StyledWord = styled.div`
  background-color: #ffe869;
  max-width: 540px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Link = styled.a`
  
`

const Title = styled.h3`
  
`

const Text = styled.p`
  
`