import Link from 'next/link'
import React from 'react'
import { TwitterIcon, InstagramIcon, FacebookIcon, LinkedinIcon, MailIcon, BuildingIcon, PhoneIcon } from '../../components/icons'
import { Container, Logo, Stack, Text } from '../../components'
import SocialIcon from './SocialIcons'
import { FooterWrapper, AllWrapper } from './styles/index.styles'
import { Colors } from '../../theme/colors'

export default function Footer() {
  const fullYear = new Date().getFullYear()
  return (
    <AllWrapper>
      <Container>
        <>
          <FooterWrapper>
            <Stack width="auto" gap="24px">
              <Logo />
              <Stack direction="row" maxWidth="284px">
                <Text color="#ffffff" size='18px' lineHeight='28px' as='p'>
                  Put yourself on a better life path through education with ScholarX.
                </Text>
              </Stack>
              <Stack width="auto" direction="row" gap="8px" alignItems="center">
                <SocialIcon link="https://www.instagram.com/come_learnam/" icon={<InstagramIcon color={"#CCCCD1"} />} />
                <SocialIcon link="https://www.linkedin.com/company/learnam/" icon={<LinkedinIcon color={"#CCCCD1"} />} />
                <SocialIcon link="https://m.facebook.com/comelearnAM" icon={<FacebookIcon color={"#CCCCD1"} />} />
                <SocialIcon link="https://twitter.com/comeLearnAM" icon={<TwitterIcon color={"#CCCCD1"} />} />
              </Stack>
            </Stack>
            <Stack width="auto" gap="24px">
              <Text color={"#ffffff"} as='h4'>Products</Text>
              <a href="https://learnam.africa" target={"_blank"}><Text size='18px' lineHeight='28px' as='p'>LearnAM</Text></a>
              <a href="https://hirequickstaff.com" target={"_blank"}><Text size='18px' lineHeight='28px' as='p'>Quickstaff</Text></a>
              <a href="/blog" target={"_blank"}><Text size='18px' lineHeight='28px' as='p'>E-transcript</Text></a>
            </Stack>
            <Stack width="auto" gap="24px">
              <Text color={"#ffffff"} as='h4'>Company</Text>
              <Link href="/#benefits"><a><Text size='18px' lineHeight='28px' as='p'>About us</Text></a></Link>
              <Link href="/contact-us"><a><Text size='18px' lineHeight='28px' as='p'>Contact us</Text></a></Link>
              <Link href="/blog"><a><Text size='18px' lineHeight='28px' as='p'>Testimonials</Text></a></Link>
            </Stack>
            <Stack width="auto" gap="24px">
              <Text color={"#ffffff"} as='h4'>Support</Text>
              <Link href="/#">
                <a>
                  <Stack direction="row" alignItems='flex-start' gap="12px">
                    <Stack><MailIcon /></Stack>
                    <Text size='18px' lineHeight='auto' as='p'>info@scholarx.co</Text>
                  </Stack>
                </a>
              </Link>
              <Link href="/#">
                <a>
                  <Stack direction="row" alignItems='flex-start' gap="12px" maxWidth='250px'>
                    <Stack><BuildingIcon /></Stack>
                    <Text size='18px' lineHeight='auto' as='p'>1 Akinwunmi St, Alagomeji-Yaba , Lagos, Nigeria</Text>
                  </Stack>
                </a>
              </Link>
              <Link href="/#">
                <a>
                  <Stack direction="row" alignItems='flex-start' gap="12px">
                    <Stack><PhoneIcon /></Stack>
                    <Text size='18px' lineHeight='auto' as='p'>08176764921</Text>
                  </Stack>
                </a>
              </Link>
            </Stack>
          </FooterWrapper>
          <Stack justifyContent="center" className='container' m="48px 0 48px 0">
            <Text size='12px' lineHeight='16px' as='p'>
              {`${fullYear} A product of ScholarX Inc. All rights reserved`}
            </Text>
          </Stack>
        </>
      </Container>
    </AllWrapper>
  )
}
