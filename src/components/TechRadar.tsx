import React, { useContext } from 'react'
import { RadarContents } from '../styles/Radar.style'
import Quadrant from './Quadrant'
import { getColorScale, ThemeContext } from './ThemeContext'

interface RadarProps {
  quadrants: string[]
  rings?: string[]
  data?: {
    id: number
    name: string
    quadrant: string
    ring: string
  }[]
  width?: number
  fontSize?: number
  itemFontSize?: number
  colorScaleIndex?: number
  radiusDiminish?: number
  margin?: number
  fontFamily?: string
  quadrantsConfig?: Record<string, any>
}

interface DataType {
  id: number
  name: string
  quadrant: string
  ring: string
}

interface ProcessedData {
  id: number
  name: string
  quadrant: string
  x: number
  y: number
}

interface RandomCoordinates {
  x: number
  y: number
}

const MAX_COLLISION_RETRY_COUNT = 350
const TOLERANCE_CONSTANT = 6
const DEFAULT_WIDTH = 700
const RADIUS_DIMINISH_CONSTANT = 1.5
const RIGHT_EXTENSION = 1.1

const TechRadar: React.FC<RadarProps> = (props: RadarProps) => {
  // Manage optional variables
  const width = props.width || DEFAULT_WIDTH
  const rings = props.rings || ['']
  const radiusDiminishConstant = props.radiusDiminish || RADIUS_DIMINISH_CONSTANT
  const data = props.data || []
  if (data.length === 0) {
    console.log('No Data Provided')
  }

  const { fontSize, fontFamily, colorScale } = useContext(ThemeContext)
  const margin = props.margin || 5
  const angle = 360 / props.quadrants.length
  const toleranceX = (width / rings.length / 100) * TOLERANCE_CONSTANT * 4
  const toleranceY = props.fontSize || fontSize

  // Collision Tolerance (Pixels)
  // console.log("x: " + toleranceX);
  // console.log("y: " + toleranceY);

  const processRadarData = (quadrants: string[], rings: string[], data: DataType[]): ProcessedData[] => {
    data.sort((a, b) => rings.indexOf(a.ring) - rings.indexOf(b.ring))

    let collisionCount = 0
    const results: ProcessedData[] = []

    for (const entry of data) {
      let quadrant_delta = 0
      const angle = (2 * Math.PI) / props.quadrants.length

      for (let j = 0, len = quadrants.length; j < len; j++) {
        if (quadrants[j] === entry.quadrant) {
          quadrant_delta = angle * j
        }
      }

      const coordinates = getRandomCoordinates(rings, entry, angle, quadrant_delta, results, collisionCount)
      if (collisionCount < MAX_COLLISION_RETRY_COUNT) {
        collisionCount = coordinates.collisionCount
      }

      const blip: ProcessedData = {
        id: entry.id,
        name: entry.name,
        quadrant: entry.quadrant,
        x: coordinates.x,
        y: coordinates.y,
      }

      results.push(blip)
    }

    return results
  }

  const getRandomCoordinates = (
    rings: string[],
    entry: DataType,
    angle: number,
    quadrant_delta: number,
    results: ProcessedData[],
    collisionCount = 0,
  ): RandomCoordinates & { collisionCount: number } => {
    const polarToCartesian = (r: number, t: number) => {
      const x = r * Math.cos(t)
      const y = r * Math.sin(t)
      return { x: x, y: y }
    }

    const getPositionByQuadrant = (radiusArray: Array<number>) => {
      const ringCount = rings.length
      const margin = 0.2
      const ringIndex = rings.indexOf(entry.ring)
      const posStart = radiusArray[ringIndex] + (1 / ringCount) * margin
      const posLength =
        Math.random() * (radiusArray[ringIndex + 1] - radiusArray[ringIndex] - 2 * ((1 / ringCount) * margin))
      return posStart + posLength
    }

    const calculateRadiusDiminish = (nrOfRings: number) => {
      let max = 1

      //create the array. each value represents
      //the share of total radius among rings.
      let arr = [1]
      for (let i = 1; i < nrOfRings; i++) {
        max = max * radiusDiminishConstant
        arr.push(max)
      }

      //calculate total shares of radius
      const sum = arr.reduce((a, b) => a + b)
      arr = arr.map((a) => a / sum)

      //now, each member of the array represent
      //the starting position of ring in the
      //circle
      arr.reverse()
      for (let i = 1; i < nrOfRings; i++) {
        arr[i] = arr[i - 1] + arr[i]
      }

      //add 0 for the center of the circle
      arr.push(0)

      //sort the array so that 0 is at the start
      arr.sort()

      return arr
    }

    const hasCollision = (results: ProcessedData[], coordinates: RandomCoordinates): boolean => {
      if (collisionCount >= MAX_COLLISION_RETRY_COUNT) {
        return false
      }

      for (const result of results) {
        if (Math.abs(result.x - coordinates.x) <= toleranceX && Math.abs(result.y - coordinates.y) <= toleranceY) {
          if (++collisionCount >= MAX_COLLISION_RETRY_COUNT) {
            console.log('max collision retry limit reached: ' + collisionCount)
          }
          return true
        }
      }
      return false
    }

    const radiusArray = calculateRadiusDiminish((props.rings || []).length)

    const randomPosition = getPositionByQuadrant(radiusArray)
    const positionAngle = Math.random()
    const ringWidth = width / 2

    //theta is the position in the quadrant
    const theta = positionAngle * angle + quadrant_delta
    const r = randomPosition * ringWidth

    const data = polarToCartesian(r, theta)

    //recalculate if there is a collision
    const collision = hasCollision(results, data)
    if (collision) {
      return getRandomCoordinates(rings, entry, angle, quadrant_delta, results, collisionCount)
    }

    //report number of collisions detected
    // data.collisionCount = collisionCount;
    // return data;
    return { ...data, collisionCount }
  }
  const points = processRadarData(props.quadrants, rings, data)

  return (
    <ThemeContext.Provider
      value={{
        fontSize: props.fontSize || fontSize,
        itemFontSize: props.itemFontSize || props.fontSize || fontSize,
        fontFamily: props.fontFamily || fontFamily,
        colorScale: props.colorScaleIndex ? getColorScale(props.colorScaleIndex) : colorScale,
        quadrantsConfig: props.quadrantsConfig || {},
      }}
    >
      <RadarContents width={width * RIGHT_EXTENSION} height={width} style={{ margin: margin }}>
        <g transform={`translate(${width / 2},${width / 2})`}>
          {props.quadrants.map((value, index) => {
            // Get points that belong to this quadrant
            const filteredPoints = points.filter((element) => element.quadrant === value)

            return (
              <g key={index}>
                <Quadrant
                  transform={`rotate(${(360 / props.quadrants.length) * index}) translate(${margin},${margin})`}
                  rotateDegrees={(360 / props.quadrants.length) * index}
                  width={width - 2 * margin}
                  index={index}
                  rings={rings}
                  points={filteredPoints}
                  angle={angle}
                  name={value}
                  radiusDiminish={radiusDiminishConstant}
                />
              </g>
            )
          })}
        </g>
      </RadarContents>
    </ThemeContext.Provider>
  )
}

export default TechRadar
