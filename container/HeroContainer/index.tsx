import React from 'react'
import { HeaderContainer } from '..'
import { Button, Container, Overlay, Stack, Text } from '../../components'
import { Colors } from '../../theme/colors'
import { HeroWrapper } from './styles/index.styles'

export default function HeroContainer() {
  return (
    <HeroWrapper>
      <Overlay opacity={0.55} color="#000" />
      <Container className="content">
        <Stack>
          <Stack m={"77px 0 0 0"}>
            <HeaderContainer />
          </Stack>
          <Stack maxWidth='552px' gap="24px" color={"#fff"} m="100px 0 0 0">
            <Text as="h3">
              <span>Creating endless paths to </span>
              <span className='heading'>Education</span>
            </Text>
            <Text>
              Learn diverse skills online, get funding for your education, upskill your workers and grow your business
            </Text>
            <Stack direction="row">
              <Button width="auto">
                Let’s Go!
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </HeroWrapper>
  )
}
