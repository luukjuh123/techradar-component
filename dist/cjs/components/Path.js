"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var d3_color_1 = require("d3-color");
var d3_shape_1 = require("d3-shape");
var ThemeContext_1 = require("./ThemeContext");
var Path = function (props) {
    var _a, _b;
    var _c = (0, react_1.useContext)(ThemeContext_1.ThemeContext), fontSize = _c.fontSize, fontFamily = _c.fontFamily, colorScale = _c.colorScale;
    var rgb = (0, d3_color_1.rgb)(colorScale(props.quadIndex));
    var fill = rgb.brighter((props.ringIndex / props.ringsLength) * 0.9);
    var uniquePathId = props.quadIndex + '-' + props.ringIndex;
    var archFunction = function () {
        return (0, d3_shape_1.arc)()
            .outerRadius(function () {
            return props.outerRadius * props.ringWidth;
        })
            .innerRadius(function () {
            return props.innerRadius * props.ringWidth;
        })
            .startAngle(function () {
            return Math.PI / 2;
        })
            .endAngle(function () {
            return props.quad_angle + Math.PI / 2;
        });
    };
    return (react_1.default.createElement("g", null,
        react_1.default.createElement("path", { id: uniquePathId, className: 'quadrant', d: (_a = archFunction()({
                outerRadius: props.outerRadius,
                innerRadius: props.innerRadius,
                startAngle: Math.PI / 2,
                endAngle: props.quad_angle + Math.PI / 2,
            })) !== null && _a !== void 0 ? _a : undefined, fill: fill }),
        props.title && (react_1.default.createElement("text", { dx: props.ringWidth / 2, fontSize: fontSize, fontFamily: fontFamily },
            react_1.default.createElement("textPath", { href: '#' + uniquePathId }, (_b = props.title) !== null && _b !== void 0 ? _b : '')))));
};
exports.default = Path;
