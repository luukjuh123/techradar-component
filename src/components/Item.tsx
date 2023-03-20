import React, { useState, useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import { ItemWrapper } from '../styles/Item.style'
import { ThemeContext } from './ThemeContext'

const MAX_LENGTH = 15

interface ItemProps {
  rotateDegrees: number
  data: {
    id: number
    name: string
    x: number
    y: number
  }
}

function Item({ rotateDegrees, data }: ItemProps): JSX.Element {
  const ref = useRef<SVGGElement>(null)

  const { itemFontSize, fontFamily } = useContext(ThemeContext)

  const [isHovered, setIsHovered] = useState<boolean>(false)

  const shortName = data.name.length > MAX_LENGTH ? `${data.name.substr(0, MAX_LENGTH)}...` : data.name

  const onMouseToggle = () => {
    setIsHovered(!isHovered)
  }

  return (
    <ItemWrapper
      className='blip'
      id={`blip-${data.id}`}
      transform={`rotate(${rotateDegrees}) translate(${data.x},${data.y})`}
      onMouseEnter={onMouseToggle}
      onMouseLeave={onMouseToggle}
      ref={ref}
      style={{
        opacity: isHovered ? '1.0' : '0.7',
        fontWeight: isHovered ? 'bold' : 'normal',
      }}
    >
      <circle r='4px' />
      <text className='name' dx='7px' dy='7px' fontSize={itemFontSize} fontFamily={fontFamily}>
        {isHovered ? data.name : shortName}
      </text>
    </ItemWrapper>
  )
}

Item.propTypes = {
  rotateDegrees: PropTypes.number.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
}

export default Item
