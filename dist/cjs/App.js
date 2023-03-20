"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var TechRadar_1 = tslib_1.__importDefault(require("./components/TechRadar"));
function App() {
    var setup = {
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
    };
    return (react_1.default.createElement("div", { className: 'App' },
        react_1.default.createElement(TechRadar_1.default, tslib_1.__assign({}, setup))));
}
exports.default = App;
