"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContext = exports.getColorScale = exports.colorScales = void 0;
var tslib_1 = require("tslib");
// import * as React from 'react'
var react_1 = require("react");
var d3_scale_1 = require("d3-scale");
var d3Scales = tslib_1.__importStar(require("d3-scale-chromatic"));
exports.colorScales = [
    { name: 'schemeCategory10' },
    { name: 'schemeAccent' },
    { name: 'schemeDark2' },
    { name: 'schemePaired' },
    { name: 'schemeSet1' },
    { name: 'schemeSet2' },
    { name: 'schemeSet3' },
];
//set color scheme by index
//chose from 0 to 6
var DEFAULT_COLOR_SCHEME_INDEX = 5;
var DEFAULT_FONT_SIZE = 12;
var DEFAULT_COLOR_SCALE = getColorScale(5);
var DEFAULT_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
function getColorScale(colorScaleIndex) {
    if (colorScaleIndex < 0 || colorScaleIndex >= exports.colorScales.length) {
        console.warn('Unsupported color scheme. Please choose between 0 and ' + (exports.colorScales.length - 1));
        return DEFAULT_COLOR_SCHEME_INDEX;
    }
    return (0, d3_scale_1.scaleOrdinal)(d3Scales[exports.colorScales[colorScaleIndex].name]);
}
exports.getColorScale = getColorScale;
exports.ThemeContext = (0, react_1.createContext)({
    colorScale: DEFAULT_COLOR_SCALE,
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: DEFAULT_FONT_SIZE,
    itemFontSize: DEFAULT_FONT_SIZE,
    quadrantsConfig: {},
});
