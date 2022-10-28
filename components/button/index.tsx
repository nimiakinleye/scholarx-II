import React from 'react'
import Loader from '../loader'
import { ButtonWrapper } from './styles/index.styles'

type Props = {
  children: any;
  loading?: boolean;
  onClick?: any;
  onMouseOver?: any;
  onMouseOut?: any;
  onMouseLeave?: any;
  width?: string;
  color?: string;
  size?: string;
  type?: "button" | "submit" | "reset";
  text?: string;
}

export default function Button({ loading, children, ...resProps }:Props) {
  return (
    <ButtonWrapper disabled={loading} {...resProps}>
      {
        loading ? <Loader /> : children
      }
    </ButtonWrapper>
  )
}
