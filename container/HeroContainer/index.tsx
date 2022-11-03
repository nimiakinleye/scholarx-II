import React, { useState } from 'react'
import { HeaderContainer } from '..'
import { Button, Container, Overlay, Stack, Text } from '../../components'
import { ScrollDownIcon } from '../../components/icons'
import { Colors } from '../../theme/colors'
import { HeroWrapper } from './styles/index.styles'

export default function HeroContainer() {
  const [iconColor, setIconColor] = useState('white')
  return (
    <HeroWrapper>
      <Overlay opacity={0.55} color="#000" />
      <Container className="content">
        <Stack width="100%">
          <Stack m={"77px 0 0 0"} sm_m="40px 0 0 0">
            <HeaderContainer />
          </Stack>
          <Stack data-aos="fade-up" maxWidth='800px' gap="24px" color={"#fff"} m="77px 0 0 0">
            <Text sm_size='32px' sm_lineHeight="64px" lineHeight='90px' size="64px">
              <span >Creating endless paths to </span>
              <span className='heading'>Education</span>
            </Text>
            <Text sm_size='24px' size="32px" lineHeight='40px'>
              Learn diverse skills online, get funding for your education, upskill your workers and grow your business
            </Text>
            <Stack direction="row" xm={"0 0 80px 0"}>
              <a href="/#focus">
                <Button onMouseOver={() => { setIconColor(Colors.primary) }} onMouseLeave={() => { setIconColor('white') }} width="auto">
                  <Stack direction="row" gap="12px">
                    Let’s Go!
                    <ScrollDownIcon color={iconColor} />
                  </Stack>
                </Button>
              </a>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </HeroWrapper>
  )
}
