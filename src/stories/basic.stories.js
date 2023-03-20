import React from 'react'
import { storiesOf } from '@storybook/react'
import TechRadar from '../components/TechRadar'

storiesOf('Basics', module)
  .add('with minimum setup', () => {
    const setup = {
      rings: ['discover', 'learn', 'use'],
      quadrants: ['languages', 'frameworks', 'tools', 'libraries'],
      data: [
        {
          id: 1,
          name: 'D3',
          quadrant: 'libraries',
          ring: 'learn',
        },
        {
          id: 2,
          name: 'TypeScript',
          quadrant: 'languages',
          ring: 'learn',
        },
        {
          id: 3,
          name: 'Storybook',
          quadrant: 'tools',
          ring: 'use',
        },
      ],
    }
    return <TechRadar rings={setup.rings} quadrants={setup.quadrants} data={setup.data} />
  })
  .add('with 5 quadrants', () => {
    const setup = {
      rings: ['adopt', 'trial', 'assess', 'hold'],
      quadrants: ['tools', 'techniques', 'platforms', 'languages', 'frameworks'],
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
    return <TechRadar rings={setup.rings} quadrants={setup.quadrants} data={setup.data} />
  })
  // .add("with data from Google SpreadSheet", () => {
  //   return <GoogleSpreadSheetDemo />;
  // })
  .add('with custom font size and font family', () => {
    const state = {
      rings: ['adopt', 'trial', 'assess', 'hold'],
      quadrants: ['tools', 'techniques', 'platforms', 'languages'],
      width: 550,
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
      <TechRadar
        width={state.width}
        rings={state.rings}
        quadrants={state.quadrants}
        data={state.data}
        fontSize={18}
        itemFontSize={12}
        fontFamily={'fantasy'}
      />
    )
  })
  .add('with custom margin', () => {
    const state = {
      rings: ['adopt', 'trial', 'assess', 'hold'],
      quadrants: ['tools', 'techniques', 'platforms', 'languages'],
      width: 550,
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
      <TechRadar
        margin={10}
        width={state.width}
        rings={state.rings}
        quadrants={state.quadrants}
        data={state.data}
        fontFamily={'fantasy'}
      />
    )
  })
  .add('with labels only on the first rim', () => {
    const state = {
      rings: ['adopt', 'trial', 'assess', 'hold'],
      quadrants: ['tools', 'techniques', 'platforms', 'languages'],
      width: 550,
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
      <TechRadar
        margin={10}
        width={state.width}
        rings={state.rings}
        quadrants={state.quadrants}
        data={state.data}
        quadrantsConfig={{
          showOnlyFirstQuadrantLabels: true,
        }}
        fontFamily={'fantasy'}
      />
    )
  })
  .add('with labels only on the first rim and a y offset on the label', () => {
    const state = {
      rings: ['adopt', 'trial', 'assess', 'hold'],
      quadrants: ['tools', 'techniques', 'platforms', 'languages'],
      width: 550,
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
      <TechRadar
        margin={10}
        width={state.width}
        rings={state.rings}
        quadrants={state.quadrants}
        data={state.data}
        quadrantsConfig={{
          showOnlyFirstQuadrantLabels: true,
          textYOffset: -5,
        }}
        fontFamily={'fantasy'}
      />
    )
  })
  .add('with  a custom text margin', () => {
    const state = {
      rings: ['adopt', 'trial', 'assess', 'hold'],
      quadrants: ['tools', 'techniques', 'platforms', 'languages'],
      width: 550,
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
      <TechRadar
        margin={10}
        width={state.width}
        rings={state.rings}
        quadrants={state.quadrants}
        data={state.data}
        quadrantsConfig={{
          showOnlyFirstQuadrantLabels: true,
          textMargin: 0,
          textYOffset: -5,
        }}
        fontFamily={'fantasy'}
      />
    )
  })
