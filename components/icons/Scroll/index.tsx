import React from 'react'

export default function ScrollDownIcon({ width, height, color }: IconTypes) {
  return (
    <svg width={width ? width : "24"} height={height ? height : "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 13.1667L12 16.6667M12 16.6667L8.5 13.1667M12 16.6667L12 7.33333M12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5Z" stroke={color ? color : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
