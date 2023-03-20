import React, { useContext } from 'react';
import { rgb as d3rgb } from 'd3-color';
import { arc as d3arc } from 'd3-shape';
import { ThemeContext } from './ThemeContext';
var Path = function (props) {
    var _a, _b;
    var _c = useContext(ThemeContext), fontSize = _c.fontSize, fontFamily = _c.fontFamily, colorScale = _c.colorScale;
    var rgb = d3rgb(colorScale(props.quadIndex));
    var fill = rgb.brighter((props.ringIndex / props.ringsLength) * 0.9);
    var uniquePathId = props.quadIndex + '-' + props.ringIndex;
    var archFunction = function () {
        return d3arc()
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
    return (React.createElement("g", null,
        React.createElement("path", { id: uniquePathId, className: 'quadrant', d: (_a = archFunction()({
                outerRadius: props.outerRadius,
                innerRadius: props.innerRadius,
                startAngle: Math.PI / 2,
                endAngle: props.quad_angle + Math.PI / 2,
            })) !== null && _a !== void 0 ? _a : undefined, fill: fill }),
        props.title && (React.createElement("text", { dx: props.ringWidth / 2, fontSize: fontSize, fontFamily: fontFamily },
            React.createElement("textPath", { href: '#' + uniquePathId }, (_b = props.title) !== null && _b !== void 0 ? _b : '')))));
};
export default Path;
