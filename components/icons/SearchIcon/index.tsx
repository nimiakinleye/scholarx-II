import React from "react";

export default function SearchIcon({ width, height, color }: IconTypes) {
  return (
    <svg width={width ? width : "22"} height={height ? height : "22"} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 20.1216L13 14.0405M15 8.97284C15 12.8911 11.866 16.0675 8 16.0675C4.13401 16.0675 1 12.8911 1 8.97284C1 5.05457 4.13401 1.87817 8 1.87817C11.866 1.87817 15 5.05457 15 8.97284Z"
        stroke={color ? color : "#FDFDFD"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      />
    </svg>
  );
}
