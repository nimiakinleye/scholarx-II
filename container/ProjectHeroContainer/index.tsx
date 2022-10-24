import React from 'react'
import { HeaderContainer } from '..'
import { HeroWrapper } from './styles/index.styles'
import { Button, Container, Overlay, Stack, Text } from '../../components'
import { Colors } from '../../theme/colors'


export default function Hero({title, image}:{title?:string, image?:string}) {
  return (
    <HeroWrapper image={image}>
      <Overlay opacity={0.55} color="#000" />
      <Container className="content">
        <Stack width="100%">
          <Stack m={"77px 0 0 0"}>
            <HeaderContainer />
          </Stack>
          <Stack data-aos="fade-up" maxWidth='552px' gap="24px" color={"#fff"} m="100px 0 0 0">
            <Text as="h3">
              {title ? title : 'Our Projects'}
            </Text>
            <Text>
              See how we are touching lives one day at a time
            </Text>

          </Stack>
        </Stack>
      </Container>
    </HeroWrapper>
  )
}
