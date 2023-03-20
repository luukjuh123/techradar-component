"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
require("./index.css");
var TechRadar_1 = tslib_1.__importDefault(require("./components/TechRadar"));
var reportWebVitals_1 = tslib_1.__importDefault(require("./reportWebVitals"));
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(TechRadar_1.default, { quadrants: [] })), document.getElementById('root'));
(0, reportWebVitals_1.default)();
