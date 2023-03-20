import React, { useContext } from 'react'
import TextWrapper from '../styles/Text.style'
import { ThemeContext } from './ThemeContext'

interface TextProps {
  dx: number
  dy: number
  name: string
  fontSize: number
  fontFamily: string
}

function Text({ dx, dy, name }: TextProps): JSX.Element {
  const { fontSize, fontFamily } = useContext(ThemeContext)

  return (
    <TextWrapper className='quadrant' fontSize={fontSize} fontFamily={fontFamily} dx={dx} dy={dy}>
      {name}
    </TextWrapper>
  )
}

export default Text
