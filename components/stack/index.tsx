import React from 'react'
import { StackPropsType } from '../../types/stack'
import { StackWrapper } from './styles/index.style'

export default function Stack({children, ...resProps}:StackPropsType) {
  return (
    <StackWrapper {...resProps}>
      {children}
    </StackWrapper>
  )
}
