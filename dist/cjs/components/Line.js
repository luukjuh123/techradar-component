"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_1 = tslib_1.__importDefault(require("react"));
function Line(_a) {
    var x2 = _a.x2, y2 = _a.y2, stroke = _a.stroke;
    return react_1.default.createElement("line", { x1: '0', y1: '0', x2: x2, y2: y2, stroke: stroke });
}
Line.propTypes = {
    x2: prop_types_1.default.number.isRequired,
    y2: prop_types_1.default.number.isRequired,
    stroke: prop_types_1.default.string.isRequired,
};
exports.default = Line;
