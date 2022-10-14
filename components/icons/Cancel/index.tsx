import React from 'react'

export default function MenuIcon({ width, height, color }: IconTypes) {
  return (
    <svg width={width ? width : "22"} height={height ? height : "22"} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 21L21 1M1 1L21 21" stroke={color ? color : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}
