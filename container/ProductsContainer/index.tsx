import React from 'react'
import { Button, Container, Stack, Text } from '../../components'
import { Colors } from '../../theme/colors'
import { ProductsWrapper } from './styles/index.styles'
import PhoneMockup from "assets/images/phone_mockup.png"
import LaptopMockup from "assets/images/laptop_mock.png"
import Image from 'next/image'

export default function FocusContainer() {
  return (
    <ProductsWrapper>
      <Container>
        <Stack width="100%">
          <Stack color={Colors.primary}>
            <Text.Small>Our Products</Text.Small>
            <Text lineHeight="48px" as="h1">Our dreams have grown bigger with time.</Text>
          </Stack>
          <Stack m="48px 0 0 0" direction="row" justifyContent='space-between' alignItems='center' sm_direction='column' flexWrap='wrap'>
            <Stack direction="column" width="400px" height="469px">
              <Image width="100%" height="100%" objectFit='cover' layout='responsive' src={PhoneMockup} />
            </Stack>
            <Stack maxWidth="517px" sm_textAlign='center'>
              <Stack>
                <Text lineHeight='48px' size="24px" as="h4">LearnAM</Text>
                <Text size="16px" as="p">LearnAM is the absolute way to break language barriers in education. The LearnAM mobile application provides learning materials  in English, Yoruba, Hausa and Igbo. We also offer business  services that range from content creation, product activation to API integration.  </Text>
              </Stack>
              <Stack m="49px 0 0 0" direction="row" sm_justifyContent='center'>
                <Button width="auto">
                  Let’s Go!
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack m="48px 0 0 0" direction="row-reverse" justifyContent='space-between' alignItems='center' sm_direction='column' flexWrap='wrap'>
            <Stack direction="column" width="400px" height="350px">
              <Image width="100%" height="100%" objectFit='contain' layout='responsive' src={LaptopMockup} />
            </Stack>
            <Stack maxWidth="517px" sm_textAlign='center'>
              <Stack>
                <Text lineHeight='48px' size="24px" as="h4">Quickstaff</Text>
                <Text size="16px" as="p">QuickStaff is the swiftest and surest way to upskill your staff at any point in time. We also save you time and energy, by recruiting skillful and qualified assistants that suit your business needs.</Text>
              </Stack>
              <Stack m="49px 0 0 0" direction="row" sm_justifyContent='center'>
                <Button width="auto">
                  Let’s Go!
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </ProductsWrapper>
  )
}
