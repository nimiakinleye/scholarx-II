import React from 'react'

export default function FacebookIcon({width, height, color}:IconTypes) {
  return (
    <svg width={width ? width : "10"} height={height ? height : "16"} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.72314 9L9.16752 6.10437H6.38908V4.22531C6.38908 3.43313 6.77721 2.66094 8.02158 2.66094H9.28471V0.195625C9.28471 0.195625 8.13846 0 7.04252 0C4.75439 0 3.25877 1.38688 3.25877 3.8975V6.10437H0.715332V9H3.25877V16H6.38908V9H8.72314Z" fill={color ? color : "#000080"} />
    </svg>

  )
}
