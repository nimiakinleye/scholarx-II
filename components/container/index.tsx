import React from 'react'
import { ContainerType } from '../../types/container'
import { ContainerWrapper } from './styles/index.styles'

export default function Container({ children, className }: ContainerType) {
  return (
    <ContainerWrapper className={className}>
      {children}
    </ContainerWrapper>
  )
}
