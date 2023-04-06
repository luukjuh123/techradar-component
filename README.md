# Techradar

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/luukjuh123/techradar-component/build_and_publish.yml?logo=yarn)![npm](https://img.shields.io/npm/v/techradar-component?logo=npm) ![GitHub top language](https://img.shields.io/github/languages/top/luukjuh123/techradar-component?logo=typescript) ![npm](https://img.shields.io/npm/dm/techradar-component?logo=npm) ![GitHub](https://img.shields.io/github/license/luukjuh123/techradar-component) ![GitHub issues](https://img.shields.io/github/issues/luukjuh123/techradar-component) ![GitHub last commit](https://img.shields.io/github/last-commit/luukjuh123/techradar-component) ![GitHub Repo stars](https://img.shields.io/github/stars/luukjuh123/techradar-component?style=social)

This is a TypeScript React component for displaying a tech radar, with customizable quadrants, rings, and items.


## Contribution

To contribute to techradar-component, report issues on GitHub with details and steps to reproduce. For pull requests, follow coding guidelines, describe your changes, and ensure tests pass. Your participation helps improve the project for the community.

## Installation

To install, run:

```bash
npm install techradar-component

```
or:
```bash
yarn add techradar-component

```


## Usage

To use, import the `TechRadar` component from `techradar-component` and provide the necessary props:

```javascript
import React from 'react';
import { TechRadar } from 'techradar-component';


type RadarProps = {
  quadrants: string[];
  rings?: string[];
  data?: {
    id: number;
    name: string;
    quadrant: string;
    ring: string;
  }[]
  width?: number;
  fontSize?: number;
  itemFontSize?: number;
  colorScaleIndex?: number;
  radiusDiminish?: number;
}

const setup: RadarProps  = {
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

const MyComponent = () => {
  return (
    <TechRadar
      {...setup}
    />
  );
};

```

## Storybook

To see the storybook run: `yarn storybook`. To build the static storybook run `yarn build-storybook`.


## Props

| Prop | Type | Required | Default value | Description |
| --- | --- | --- | --- | --- |
| quadrants | string[] | Yes | - | An array of strings representing the quadrants of the radar chart |
| rings | string[] | No | - | An array of strings representing the rings of the radar chart |
| data | DataType[] | No | - | An array of objects with the following properties: id, name, quadrant, ring |
| width | number | No | 700px | The width of the TechRadar component |
| fontSize | number | No | 12px | The radius of the radar chart |
| itemFontSize | number | No | 12px | Item size differentiation than quadrant titles |
| colorScaleIndex | number | No | 200 | The item fontSize |
| radiusDiminish | number | No | 2 | The factor in which the rings are equal |


## License

This component is licensed under the MIT License.