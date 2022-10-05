import React from 'react'
import { TextWrapper } from "./styles/index.styles"

export type TextOwnProps<E extends React.ElementType> = {
  as?: E;
  children: string | number | string & number | JSX.Element | JSX.Element[];
  m?: string;
  p?: string;
  size?:string;
  lineHeight?:string;
  align?:string;
  weight?:string;
}

export type TextPropsType = {
  // as?:React.ElementType;
  children: string | number | string & number | JSX.Element | JSX.Element[];
  m?: string;
  p?: string;
  size?:string;
  lineHeight?:string;
  align?:string;
  weight?:string;
}

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
