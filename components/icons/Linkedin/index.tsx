import React from 'react'

export default function LinkedinIcon({width, height, color}:IconTypes) {
  return (
    <svg width={width ? width : "18"} height={height ? height : "18"} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.16719 17.5001H0.539062V5.8165H4.16719V17.5001ZM2.35117 4.22275C1.19102 4.22275 0.25 3.26182 0.25 2.10166C0.25 1.54439 0.471373 1.00995 0.865419 0.615907C1.25947 0.221861 1.79391 0.000488281 2.35117 0.000488281C2.90844 0.000488281 3.44288 0.221861 3.83692 0.615907C4.23097 1.00995 4.45234 1.54439 4.45234 2.10166C4.45234 3.26182 3.51094 4.22275 2.35117 4.22275ZM17.7461 17.5001H14.1258V11.8126C14.1258 10.4571 14.0984 8.71885 12.2395 8.71885C10.3531 8.71885 10.0641 10.1915 10.0641 11.7149V17.5001H6.43984V5.8165H9.91953V7.41025H9.97031C10.4547 6.49229 11.6379 5.52353 13.4031 5.52353C17.075 5.52353 17.75 7.9415 17.75 11.0821V17.5001H17.7461Z" fill={color ? color : "#000080"} />
    </svg>

  )
}
