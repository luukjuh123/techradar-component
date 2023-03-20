import React from 'react'
import TechRadar from './components/TechRadar'

function App() {
  const setup = {
    rings: ['adopt', 'trial', 'assess', 'hold'],
    quadrants: ['tools', 'techniques', 'platforms', 'languages'],
    data: [
      {
        id: 1,
        name: 'D3',
        quadrant: 'tools',
        ring: 'assess',
      },
      {
        id: 2,
        name: 'TypeScript',
        quadrant: 'languages',
        ring: 'trial',
      },
      {
        id: 3,
        name: 'Storybook',
        quadrant: 'tools',
        ring: 'adopt',
      },
    ],
  }

  return (
    <div className='App'>
      <TechRadar {...setup} />
    </div>
  )
}

export default App
