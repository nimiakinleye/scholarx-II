import React from "react";

export default function CategoryIcon({ width, height, color }: IconTypes){
    return(
        <svg width={width ? width : "22"} height={height ? height : "22"} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 9.98639H3M17 9.98639C18.1046 9.98639 19 10.8939 19 12.0134V18.0946C19 19.2141 18.1046 20.1217 17 20.1217H3C1.89543 20.1217 1 19.2141 1 18.0946V12.0134C1 10.8939 1.89543 9.98639 3 9.98639M17 9.98639V7.95934C17 6.83982 16.1046 5.93228 15 5.93228M3 9.98639V7.95934C3 6.83982 3.89543 5.93228 5 5.93228M5 5.93228V3.90523C5 2.78572 5.89543 1.87817 7 1.87817H13C14.1046 1.87817 15 2.78572 15 3.90523V5.93228M5 5.93228H15"
             stroke={color ? color : "#FDFDFD"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
