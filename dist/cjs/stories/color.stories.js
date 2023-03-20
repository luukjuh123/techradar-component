"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_2 = require("@storybook/react");
var TechRadar_1 = tslib_1.__importDefault(require("../components/TechRadar"));
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
    return (react_1.default.createElement(TechRadar_1.default, { rings: setup.rings, quadrants: setup.quadrants, data: setup.data, colorScaleIndex: setup.colorScaleIndex }));
}; };
(0, react_2.storiesOf)('Color Schemes', module)
    .add('with 1', colorSchemeStoryHandler(1))
    .add('with 2', colorSchemeStoryHandler(2))
    .add('with 3', colorSchemeStoryHandler(3))
    .add('with 4', colorSchemeStoryHandler(4))
    .add('with 5', colorSchemeStoryHandler(5))
    .add('with 6', colorSchemeStoryHandler(6));
(0, react_2.storiesOf)('Edge Cases', module)
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
    return react_1.default.createElement(TechRadar_1.default, { quadrants: state.quadrants });
})
    .add('with no data provided', function () {
    var setup = {
        rings: ['adopt', 'trial', 'assess', 'hold'],
        quadrants: ['tools', 'techniques', 'platforms', 'language-and-frameworks'],
    };
    return react_1.default.createElement(TechRadar_1.default, { rings: setup.rings, quadrants: setup.quadrants });
});
