import React from 'react'
import { Container, Stack, Text } from '../../components'
import { Colors } from '../../theme/colors'
import FocusCard from './FocusCard'
import { FocusWrapper } from './styles/index.styles'
import GraduationCap from "assets/icons/graduation_cap 1.png"
import LightBulb from "assets/icons/light_bulb 2.png"
import Money from "assets/icons/money 1.png"
import { StaticImageData } from 'next/image'

export default function FocusContainer() {
  const focus_cards = [
    {title: "Education", content: "We are providing digital and affordable education to low-income earners in Africa", image: GraduationCap},
    {title: "Upskilling", content: "Employers are now upskilling their workers on our platform", image: LightBulb},
    {title: "Financing", content: "Over the years, we have funded the education of underserved youths in Africa", image: Money},
  ]
  return (
    <FocusWrapper>
      <Container>
        <Stack width="100%">
          <Stack data-aos="fade-up" color={Colors.primary} maxWidth='491px'>
            <Text.Small>What is our Focus?</Text.Small>
            <Text lineHeight="48px" as="h1">We are focused on imparting lifelong skills to Africans</Text>
          </Stack>
          <Stack m="48px 0 0 0" maxWidth="1200px" gap="24px" direction="row" sm_justifyContent='center' justifyContent='space-between' flexWrap='wrap'>
            {focus_cards.map((card:{title:string, content:string, image: StaticImageData}, i) => {
              return (
                <FocusCard key={i} details={card}/>
              )
            })}
          </Stack>
        </Stack>
      </Container>
    </FocusWrapper>
  )
}
