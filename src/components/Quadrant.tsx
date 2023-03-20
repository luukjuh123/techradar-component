import React, { useContext, useRef } from 'react'
import Text from './Text'
import Path from './Path'
import Line from './Line'
import Item from './Item'
import { QuadrantWrapper } from '../styles/Quadrant.style'
import { ThemeContext } from './ThemeContext'
// import PropTypes from "prop-types";

interface QuadrantProps {
  transform: string
  rotateDegrees: number
  width: number
  index: number
  rings: string[]
  points: {
    id: number
    name: string
    quadrant: string
    ring?: string
    x: number
    y: number
  }[]
  angle: number
  name: string
  radiusDiminish?: number
}

const Quadrant: React.FC<QuadrantProps> = (props) => {
  const {
    fontSize,
    fontFamily,
    colorScale,
    quadrantsConfig: { textMargin, textYOffset, showOnlyFirstQuadrantLabels },
  } = useContext(ThemeContext)

  const radiusDiminishConstant = props.radiusDiminish

  let ref = useRef<SVGSVGElement>(null)
  const ringWidth = props.width / 2
  const radialAngle = ((2 * Math.PI) / 360) * props.angle

  const onMouseOver = () => {
    if (ref.current) {
      ref.current.style.opacity = '1.0'
    }
  }

  const onMouseOut = () => {
    if (ref.current) {
      ref.current.style.opacity = '0.7'
    }
  }
  const onMouseClick = () => {
    // const svg = d3.select(ref);
    // svg.transition()
    //     .duration(2000)
    //     .style("transform", "translate(-300px, -300px) scale(" + 2 + ") ")
  }

  const calculateRadiusDiminish = (nrOfRings: number) => {
    let max = 1

    // create the array. each value represents
    // the share of total radius among rings.
    let arr = [1]
    for (let i = 1; i < nrOfRings; i++) {
      max = max * radiusDiminishConstant!
      arr.push(max)
    }

    // calculate total shares of radius
    const sum = arr.reduce((a, b) => a + b)
    arr = arr.map((a) => a / sum)

    // now, each member of the array represent
    // the starting position of ring in the
    // circle
    arr.reverse()
    for (let i = 1; i < nrOfRings; i++) {
      arr[i] = arr[i - 1] + arr[i]
    }

    // add 0 for the center of the circle
    arr.push(0)

    // sort the array so that 0 is at the start
    arr.sort()

    return arr
  }

  const radiuses = calculateRadiusDiminish(props.rings.length)

  return (
    <QuadrantWrapper
      transform={props.transform}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onMouseClick}
      ref={(el: any) => (ref = el)}
    >
      <Line x2={ringWidth} y2={0} stroke={colorScale(props.index)} />

      {props.rings.map((ringValue, ringIndex) => {
        const ringsLength = props.rings.length
        const title = ringIndex === props.rings.length - 1 ? props.name : null

        const leftMargin = textMargin ?? 40 * (radiuses[ringIndex + 1] - radiuses[ringIndex])
        const showLabel = showOnlyFirstQuadrantLabels ? props.index === 0 : true
        return (
          <g key={props.index + '-' + ringIndex}>
            {showLabel && (
              <Text
                name={ringValue}
                dx={leftMargin + radiuses[ringIndex] * ringWidth}
                dy={textYOffset}
                fontSize={fontSize}
                fontFamily={fontFamily}
              />
            )}
            <Path
              quadIndex={props.index}
              ringIndex={ringIndex}
              ringWidth={ringWidth}
              ringsLength={ringsLength}
              quad_angle={radialAngle}
              outerRadius={radiuses[ringIndex + 1]}
              innerRadius={radiuses[ringIndex]}
              title={title}
            />
          </g>
        )
      })}
      {props.points.map((value, index) => {
        return <Item rotateDegrees={-props.rotateDegrees} key={index} data={value} />
      })}
    </QuadrantWrapper>
  )
}

export default Quadrant
