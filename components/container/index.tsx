import React from 'react'
import { ContainerType } from '../../types/container'
import { ContainerWrapper } from './styles/index.styles'

export default function Container({ children, className, alignItems, ...resProps }: ContainerType) {
  return (
    <ContainerWrapper {...resProps} className={className} alignItems={alignItems}>
      {children}
    </ContainerWrapper>
  )
}
