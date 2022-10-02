import React from 'react'

export default function MenuIcon({ width, height, color }: IconTypes) {
  return (
    <svg width={width ? width : "40"} height={height ? height : "30"} viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.33301 1H38.6663M1.33301 15H38.6663M1.33301 29H17.6663" stroke={color ? color : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
