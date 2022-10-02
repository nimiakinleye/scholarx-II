import React from 'react'
import { Container, Stack, Text } from '../../components'
import { Colors } from '../../theme/colors'
import FocusCard from './FocusCard'
import { FocusWrapper } from './styles/index.styles'

export default function FocusContainer() {
  return (
    <FocusWrapper>
      <Container>
        <Stack>
          <Stack color={Colors.primary} maxWidth='491px'>
            <Text.Small>What is our Focus?</Text.Small>
            <Text lineHeight="48px" as="h1">We are focused on imparting lifelong skills to Africans</Text>
          </Stack>
          <Stack m="48px 0 0 0" direction="row" justifyContent='space-between' flexWrap='wrap'>
            {[1, 2, 3].map(() => {
              return (
                <FocusCard />
              )
            })}
          </Stack>
        </Stack>
      </Container>
    </FocusWrapper>
  )
}
