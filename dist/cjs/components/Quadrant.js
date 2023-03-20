"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var Text_1 = tslib_1.__importDefault(require("./Text"));
var Path_1 = tslib_1.__importDefault(require("./Path"));
var Line_1 = tslib_1.__importDefault(require("./Line"));
var Item_1 = tslib_1.__importDefault(require("./Item"));
var Quadrant_style_1 = require("../styles/Quadrant.style");
var ThemeContext_1 = require("./ThemeContext");
var Quadrant = function (props) {
    var _a = (0, react_1.useContext)(ThemeContext_1.ThemeContext), fontSize = _a.fontSize, fontFamily = _a.fontFamily, colorScale = _a.colorScale, _b = _a.quadrantsConfig, textMargin = _b.textMargin, textYOffset = _b.textYOffset, showOnlyFirstQuadrantLabels = _b.showOnlyFirstQuadrantLabels;
    var radiusDiminishConstant = props.radiusDiminish;
    var ref = (0, react_1.useRef)(null);
    var ringWidth = props.width / 2;
    var radialAngle = ((2 * Math.PI) / 360) * props.angle;
    var onMouseOver = function () {
        if (ref.current) {
            ref.current.style.opacity = '1.0';
        }
    };
    var onMouseOut = function () {
        if (ref.current) {
            ref.current.style.opacity = '0.7';
        }
    };
    var onMouseClick = function () {
        // const svg = d3.select(ref);
        // svg.transition()
        //     .duration(2000)
        //     .style("transform", "translate(-300px, -300px) scale(" + 2 + ") ")
    };
    var calculateRadiusDiminish = function (nrOfRings) {
        var max = 1;
        // create the array. each value represents
        // the share of total radius among rings.
        var arr = [1];
        for (var i = 1; i < nrOfRings; i++) {
            max = max * radiusDiminishConstant;
            arr.push(max);
        }
        // calculate total shares of radius
        var sum = arr.reduce(function (a, b) { return a + b; });
        arr = arr.map(function (a) { return a / sum; });
        // now, each member of the array represent
        // the starting position of ring in the
        // circle
        arr.reverse();
        for (var i = 1; i < nrOfRings; i++) {
            arr[i] = arr[i - 1] + arr[i];
        }
        // add 0 for the center of the circle
        arr.push(0);
        // sort the array so that 0 is at the start
        arr.sort();
        return arr;
    };
    var radiuses = calculateRadiusDiminish(props.rings.length);
    return (react_1.default.createElement(Quadrant_style_1.QuadrantWrapper, { transform: props.transform, onMouseOver: onMouseOver, onMouseOut: onMouseOut, onClick: onMouseClick, ref: function (el) { return (ref = el); } },
        react_1.default.createElement(Line_1.default, { x2: ringWidth, y2: 0, stroke: colorScale(props.index) }),
        props.rings.map(function (ringValue, ringIndex) {
            var ringsLength = props.rings.length;
            var title = ringIndex === props.rings.length - 1 ? props.name : null;
            var leftMargin = textMargin !== null && textMargin !== void 0 ? textMargin : 40 * (radiuses[ringIndex + 1] - radiuses[ringIndex]);
            var showLabel = showOnlyFirstQuadrantLabels ? props.index === 0 : true;
            return (react_1.default.createElement("g", { key: props.index + '-' + ringIndex },
                showLabel && (react_1.default.createElement(Text_1.default, { name: ringValue, dx: leftMargin + radiuses[ringIndex] * ringWidth, dy: textYOffset, fontSize: fontSize, fontFamily: fontFamily })),
                react_1.default.createElement(Path_1.default, { quadIndex: props.index, ringIndex: ringIndex, ringWidth: ringWidth, ringsLength: ringsLength, quad_angle: radialAngle, outerRadius: radiuses[ringIndex + 1], innerRadius: radiuses[ringIndex], title: title })));
        }),
        props.points.map(function (value, index) {
            return react_1.default.createElement(Item_1.default, { rotateDegrees: -props.rotateDegrees, key: index, data: value });
        })));
};
exports.default = Quadrant;
