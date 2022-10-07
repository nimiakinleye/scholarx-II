import React from 'react'
import { TextWrapper } from "./styles/index.styles"

export type TextOwnProps<E extends React.ElementType> = {
  as?: E;
  children: string | number | (string & number) | JSX.Element | JSX.Element[];
  m?: string;
<<<<<<< HEAD
  size?: string;
  lineHeight?: string;
  align?: string;
  textalign?: string;
  fontweight?: string;
};
=======
  p?: string;
  size?:string;
  sm_size?:string;
  lineHeight?:string;
  align?:string;
  sm_align?:string;
  weight?:string;
}
>>>>>>> 07e4ee528b187a8f5514efcf58dcfe214163c97d

export type TextPropsType = {
  // as?:React.ElementType;
  children: string | number | (string & number) | JSX.Element | JSX.Element[];
  m?: string;
<<<<<<< HEAD
  size?: string;
  lineHeight?: string;
  align?: string;
  textalign?: string;
  fontweight?: string;
};
=======
  p?: string;
  size?:string;
  sm_size?:string,
  lineHeight?:string;
  align?:string;
  sm_align?:string;
  weight?:string;
}
>>>>>>> 07e4ee528b187a8f5514efcf58dcfe214163c97d

type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

export default function Text<E extends React.ElementType = 'div'>({ as, children, ...resProps }: TextProps<E>) {
  const Component = as || "div"
  return (
    <TextWrapper {...resProps}>
      <Component>{children}</Component>
    </TextWrapper>
  )
}

Text.Small = function TextSmall({ children, ...restProps }: TextPropsType) {
  return <Text size="20px" {...restProps}>{children}</Text>
}
