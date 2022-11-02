import Link from 'next/link';
import React from 'react'
import { Container, Stack } from '../../components';
import { CancelIcon } from '../../components/icons';
import { CancelIconWrapper, NavBgWrapper, NavWrapper, SidebarWrapper } from './styles/index.styles'

export default function SideBar({ show, toggle }: { show: boolean; toggle: () => void }) {
  const links = [
    { title: "About us", link: "about-us" },
    { title: "Contact us", link: "about-us/#contact-us" },
    { title: "Projects", link: "project" },
    { title: "Careers", link: "careers" },
  ]
  return (
    <SidebarWrapper show={show}>
      <NavWrapper>
        <Stack justifyContent='center' height='100%'>
          <Container alignItems='flex-start' sm_alignItems='center'>
            <Stack justifyContent='' alignItems='flex-start' height='100%'>
              {
                links.map((link: { title: string, link: string }, i: number) => {
                  return <Stack onClick={toggle} m="20px 0" p="10px" key={i}>
                    <Link href={`/${link.link}`}>
                      <a>
                        {link.title}
                      </a>
                    </Link>
                  </Stack>
                })
              }
            </Stack>
          </Container>
        </Stack>
      </NavWrapper>
      <NavBgWrapper></NavBgWrapper>
      <CancelIconWrapper>
        <Container>
          <Stack m="90px 0" onClick={toggle}>
            <CancelIcon />
          </Stack>
        </Container>
      </CancelIconWrapper>
    </SidebarWrapper>
  )
}
