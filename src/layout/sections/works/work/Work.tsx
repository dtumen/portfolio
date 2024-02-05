import React from 'react'
import styled from 'styled-components'
import { Link } from '../../../../components/Link'
import { theme } from '../../../../styles/Theme'
import { Button } from '../../../../components/Button'

type WorkPropsTypes = {
  imageSrc: string
  title: string
  text: string
  alt: string
}

export default function Work(props: WorkPropsTypes) {
  return (
    <StyledWork>
      <ImageWrapper>
        <Image src={props.imageSrc} alt={props.alt} />
        <Button>view project</Button>
      </ImageWrapper>
      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href="">demo</Link>
        <Link href="">code</Link>
      </Description>
    </StyledWork>
  )
}

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  max-width: 540px;
  width: 100%;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
      &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0px;
      backdrop-filter: blur(4px);
    }

    ${Button} {
        opacity: 1;
      }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &::before {
      width: 100%;
      height: 100%;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Description = styled.div`
  padding: 25px 20px;
`

const Title = styled.h3`
  
`

const Text = styled.p`
  padding: 14px 0 10px;
`