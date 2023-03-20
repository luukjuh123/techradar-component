import React from 'react';
import { storiesOf } from '@storybook/react';
import TechRadar from '../components/TechRadar';
// import GoogleSpreadSheetDemo from "../../examples/google-spreadsheet/GoogleSpreadsheetDemo";
var colorSchemeStoryHandler = function (schemeIndex) { return function () {
    var setup = {
        rings: ['adopt', 'trial', 'assess', 'hold'],
        quadrants: ['tools', 'techniques', 'platforms', 'languages', 'frameworks', 'methodologies'],
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
        colorScaleIndex: schemeIndex,
    };
    return (React.createElement(TechRadar, { rings: setup.rings, quadrants: setup.quadrants, data: setup.data, colorScaleIndex: setup.colorScaleIndex }));
}; };
storiesOf('Color Schemes', module)
    .add('with 1', colorSchemeStoryHandler(1))
    .add('with 2', colorSchemeStoryHandler(2))
    .add('with 3', colorSchemeStoryHandler(3))
    .add('with 4', colorSchemeStoryHandler(4))
    .add('with 5', colorSchemeStoryHandler(5))
    .add('with 6', colorSchemeStoryHandler(6));
storiesOf('Edge Cases', module)
    .add('without rings', function () {
    var state = {
        quadrants: ['tools', 'techniques', 'platforms', 'languages'],
        data: [
            {
                id: 1,
                name: 'D3',
                quadrant: 'tools',
            },
            {
                id: 2,
                name: 'TypeScript',
                quadrant: 'languages',
            },
            {
                id: 3,
                name: 'Storybook',
                quadrant: 'tools',
            },
        ],
    };
    return React.createElement(TechRadar, { quadrants: state.quadrants });
})
    .add('with no data provided', function () {
    var setup = {
        rings: ['adopt', 'trial', 'assess', 'hold'],
        quadrants: ['tools', 'techniques', 'platforms', 'language-and-frameworks'],
    };
    return React.createElement(TechRadar, { rings: setup.rings, quadrants: setup.quadrants });
});
