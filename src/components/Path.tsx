import React, { useContext } from 'react'
import { rgb as d3rgb } from 'd3-color'
import { arc as d3arc } from 'd3-shape'
import { ThemeContext, ThemeContextType } from './ThemeContext'

interface PathProps {
  quadIndex: number
  ringIndex: number
  ringWidth: number
  ringsLength: number
  quad_angle: number
  outerRadius: number
  innerRadius: number
  title?: string | null
}

const Path: React.FC<PathProps> = (props) => {
  const { fontSize, fontFamily, colorScale } = useContext<ThemeContextType>(ThemeContext)

  const rgb = d3rgb(colorScale(props.quadIndex))
  const fill = rgb.brighter((props.ringIndex / props.ringsLength) * 0.9)
  const uniquePathId = props.quadIndex + '-' + props.ringIndex

  const archFunction = () => {
    return d3arc<{
      outerRadius: number
      innerRadius: number
      startAngle: number
      endAngle: number
    }>()
      .outerRadius(() => {
        return props.outerRadius * props.ringWidth
      })
      .innerRadius(() => {
        return props.innerRadius * props.ringWidth
      })
      .startAngle(() => {
        return Math.PI / 2
      })
      .endAngle(() => {
        return props.quad_angle + Math.PI / 2
      })
  }

  return (
    <g>
      <path
        id={uniquePathId}
        className={'quadrant'}
        d={
          archFunction()({
            outerRadius: props.outerRadius,
            innerRadius: props.innerRadius,
            startAngle: Math.PI / 2,
            endAngle: props.quad_angle + Math.PI / 2,
          }) ?? undefined
        }
        fill={fill}
      ></path>

      {props.title && (
        <text dx={props.ringWidth / 2} fontSize={fontSize} fontFamily={fontFamily}>
          <textPath href={'#' + uniquePathId}>{props.title ?? ''}</textPath>
        </text>
      )}
    </g>
  )
}

export default Path
