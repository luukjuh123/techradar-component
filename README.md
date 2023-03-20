# Techradar

This is a TypeScript React component for displaying a tech radar, with customizable quadrants, rings, and items.

## Installation

To install, run:

```
npm install techradar-component

```

## Usage

To use, import the `TechRadar` component from `techradar-component` and provide the necessary props:

```
import { TechRadar } from 'techradar-component';

const quadrants = ['Languages', 'Frameworks', 'Databases', 'Tools'];
const rings = ['Adopt', 'Trial', 'Assess', 'Hold'];
const data = [
  { id: 1, name: 'TypeScript', quadrant: 'Languages', ring: 'Adopt' },
  { id: 2, name: 'React', quadrant: 'Frameworks', ring: 'Adopt' },
  // ...
];

const MyComponent = () => {
  return (
    <TechRadar
      width={800}
      quadrants={quadrants}
      rings={rings}
      data={data}
    />
  );
};

```

## Props

| Prop | Type | Required | Default value | Description |
| --- | --- | --- | --- | --- |
| width | number | Yes | - | The width of the TechRadar component |
| data | DataType[] | Yes | - | An array of objects with the following properties: id, name, quadrant, ring |
| rings | string[] | Yes | - | An array of strings representing the rings of the radar chart |
| quadrants | string[] | Yes | - | An array of strings representing the quadrants of the radar chart |
| radius | number | No | 200 | The radius of the radar chart |
| startingQuadrant | 'q1' | 'q2' | 'q3' | 'q4' | No | 'q1' | The quadrant where the radar chart starts |
| onDataPointClick | (dataPoint: DataType) => void | No | - | A function that will be called when a data point is clicked |

## License

This component is licensed under the MIT License.