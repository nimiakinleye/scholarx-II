import Link from 'next/link'
import React, { useState } from 'react'
import { Logo, Stack } from '../../components'
import { CancelIcon, MenuIcon } from '../../components/icons'
import { HeaderType } from '../../types/header'
import SideBar from './SideBar'
import { HeaderWrapper } from './styles/index.styles'

export default function Header({color}:HeaderType) {
  const [showNav, setShowNav] = useState(false)
  const toggleShowNav = () => {
    setShowNav(!showNav)
  }
  return (
    <HeaderWrapper>
      <Link href='/'><a><Logo color={color}/></a></Link>
      <Stack className='pointer' onClick={toggleShowNav}>
        {
          !showNav ? 
          <MenuIcon color={color}/>:
          ""
        }
      </Stack>
      <SideBar toggle={toggleShowNav} show={showNav}/>
    </HeaderWrapper>
  )
}
