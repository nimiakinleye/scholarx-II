import Link from 'next/link'
import React from 'react'
import { TwitterIcon, InstagramIcon, FacebookIcon, LinkedinIcon } from '../../components/icons'
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
                <SocialIcon link="https://www.instagram.com/come_learnam/" icon={<InstagramIcon color={"#CCCCD1"}/>} />
                <SocialIcon link="https://www.linkedin.com/company/learnam/" icon={<LinkedinIcon color={"#CCCCD1"}/>} />
                <SocialIcon link="https://m.facebook.com/comelearnAM" icon={<FacebookIcon color={"#CCCCD1"}/>} />
                <SocialIcon link="https://twitter.com/comeLearnAM" icon={<TwitterIcon color={"#CCCCD1"}/>} />
              </Stack>
            </Stack>
            <Stack width="auto" gap="24px">
              <Text color={"#ffffff"} as='h4'>Company</Text>
              <Link href="/#benefits"><a><Text size='18px' lineHeight='28px' as='p'>About us</Text></a></Link>
              <Link href="/contact-us"><a><Text size='18px' lineHeight='28px' as='p'>Contact us</Text></a></Link>
              <Link href="/blog"><a><Text size='18px' lineHeight='28px' as='p'>Blog</Text></a></Link>
            </Stack>
            <Stack width="auto" gap="24px">
              <Text color={"#ffffff"} as='h4'>Services</Text>
              <a href='/#api_integration'><Text size='18px' lineHeight='28px' as='p'>Api Integration</Text></a>
              <a href='/#content_creation'><Text size='18px' lineHeight='28px' as='p'>Content Production</Text></a>
              <a href='/#product_activation'><Text size='18px' lineHeight='28px' as='p'>Product Activation</Text></a>
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
