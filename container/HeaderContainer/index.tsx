import Link from 'next/link'
import React from 'react'
import { Logo } from '../../components'
import { MenuIcon } from '../../components/icons'
import { HeaderType } from '../../types/header'
import { HeaderWrapper } from './styles/index.styles'

export default function Header({color}:HeaderType) {
  return (
    <HeaderWrapper>
      <Link href='/'><a><Logo color={color}/></a></Link>
      <MenuIcon color={color}/>
    </HeaderWrapper>
  )
}
