import React from 'react'
import { FocusCardWrapper, IconWrapper } from '../styles/index.styles'
import { Text } from "../../../components"
import Image, { StaticImageData } from 'next/image'

type Props = {
  details: {
    title: string;
    content: string;
    image: StaticImageData;
  }
}

export default function FocusCard({ details }: Props) {
  return (
    <FocusCardWrapper>
      <IconWrapper>
        <Image src={details.image}/>
      </IconWrapper>
      <Text as="h4">{details.title}</Text>
      <Text as="p" size="16px" lineHeight='24px'>{details.content}</Text>
    </FocusCardWrapper>
  )
}
