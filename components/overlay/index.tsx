import React from 'react'
import { OverlayType } from '../../types/overlay'
import { OverlayWrapper } from './styles/index.styles'

export default function Overlay({color, opacity}:OverlayType) {
  return (
    <OverlayWrapper color={color} opacity={opacity}></OverlayWrapper>
  )
}
