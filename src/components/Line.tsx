import PropTypes from 'prop-types'
import React from 'react'

interface LineProps {
  x2: number
  y2: number
  stroke: string
}

function Line({ x2, y2, stroke }: LineProps): JSX.Element {
  return <line x1='0' y1='0' x2={x2} y2={y2} stroke={stroke} />
}

Line.propTypes = {
  x2: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
  stroke: PropTypes.string.isRequired,
}

export default Line
