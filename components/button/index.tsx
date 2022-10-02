import React from 'react'
import { ButtonWrapper } from './styles/index.styles'

export default function Button({ ...resProps }) {
  return (
    <ButtonWrapper {...resProps}>{resProps.children}</ButtonWrapper>
  )
}
