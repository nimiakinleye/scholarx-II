import React from 'react'
import { SocialIconWrapper } from '../styles/index.styles'

export default function SocialIcon({icon, link}:any) {
  return (
    <SocialIconWrapper><a href={link} target="_blank">{icon}</a></SocialIconWrapper>
  )
}
