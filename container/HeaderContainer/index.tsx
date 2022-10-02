import React from 'react'
import { Logo } from '../../components'
import { MenuIcon } from '../../components/icons'
import { Colors } from '../../theme/colors'
import { HeaderType } from '../../types/header'
import { HeaderWrapper } from './styles/index.styles'

export default function Header({color}:HeaderType) {
  return (
    <HeaderWrapper>
      <Logo color={color}/>
      <MenuIcon color={color}/>
    </HeaderWrapper>
  )
}
