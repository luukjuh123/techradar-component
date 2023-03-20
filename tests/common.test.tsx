import React from 'react'
import { render } from '@testing-library/react'
import TechRadar from '../src/components/TechRadar'

describe('TechRadar', () => {
  const setup = {
    width: 800,
    rings: ['Ring 0', 'Ring 1', 'Ring 2', 'Ring 3'],
    quadrants: ['Quadrant 0', 'Quadrant 1', 'Quadrant 2', 'Quadrant 3'],
    data: [
      { id: 1, name: 'Item 1', quadrant: 'Quadrant 0', ring: 'Ring 0' },
      { id: 2, name: 'Item 2', quadrant: 'Quadrant 1', ring: 'Ring 1' },
      { id: 3, name: 'Item 3', quadrant: 'Quadrant 2', ring: 'Ring 2' },
      { id: 4, name: 'Item 4', quadrant: 'Quadrant 3', ring: 'Ring 3' },
    ],
  }

  it('renders without crashing', () => {
    render(<TechRadar {...setup} />)
  })

  it('renders the correct number of rings', () => {
    const { container } = render(<TechRadar {...setup} />)
    const rings = container.querySelectorAll('.ring')
    expect(rings).toHaveLength(setup.rings.length)
  })

  it('renders the correct number of quadrants', () => {
    const { container } = render(<TechRadar {...setup} />)
    const quadrants = container.querySelectorAll('.quadrant')
    expect(quadrants).toHaveLength(setup.quadrants.length)
  })

  it('renders the correct number of items', () => {
    const { container } = render(<TechRadar {...setup} />)
    const items = container.querySelectorAll('.item')
    expect(items).toHaveLength(setup.data.length)
  })
})
