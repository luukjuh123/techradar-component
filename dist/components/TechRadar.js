import { __assign } from "tslib";
import React, { useContext } from 'react';
import { RadarContents } from '../styles/Radar.style';
import Quadrant from './Quadrant';
import { getColorScale, ThemeContext } from './ThemeContext';
var MAX_COLLISION_RETRY_COUNT = 350;
var TOLERANCE_CONSTANT = 6;
var DEFAULT_WIDTH = 700;
var RADIUS_DIMINISH_CONSTANT = 1.5;
var RIGHT_EXTENSION = 1.1;
var TechRadar = function (props) {
    // Manage optional variables
    var width = props.width || DEFAULT_WIDTH;
    var rings = props.rings || [''];
    var radiusDiminishConstant = props.radiusDiminish || RADIUS_DIMINISH_CONSTANT;
    var data = props.data || [];
    if (data.length === 0) {
        console.log('No Data Provided');
    }
    var _a = useContext(ThemeContext), fontSize = _a.fontSize, fontFamily = _a.fontFamily, colorScale = _a.colorScale;
    var margin = props.margin || 5;
    var angle = 360 / props.quadrants.length;
    var toleranceX = (width / rings.length / 100) * TOLERANCE_CONSTANT * 4;
    var toleranceY = props.fontSize || fontSize;
    // Collision Tolerance (Pixels)
    // console.log("x: " + toleranceX);
    // console.log("y: " + toleranceY);
    var processRadarData = function (quadrants, rings, data) {
        data.sort(function (a, b) { return rings.indexOf(a.ring) - rings.indexOf(b.ring); });
        var collisionCount = 0;
        var results = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var entry = data_1[_i];
            var quadrant_delta = 0;
            var angle_1 = (2 * Math.PI) / props.quadrants.length;
            for (var j = 0, len = quadrants.length; j < len; j++) {
                if (quadrants[j] === entry.quadrant) {
                    quadrant_delta = angle_1 * j;
                }
            }
            var coordinates = getRandomCoordinates(rings, entry, angle_1, quadrant_delta, results, collisionCount);
            if (collisionCount < MAX_COLLISION_RETRY_COUNT) {
                collisionCount = coordinates.collisionCount;
            }
            var blip = {
                id: entry.id,
                name: entry.name,
                quadrant: entry.quadrant,
                x: coordinates.x,
                y: coordinates.y,
            };
            results.push(blip);
        }
        return results;
    };
    var getRandomCoordinates = function (rings, entry, angle, quadrant_delta, results, collisionCount) {
        if (collisionCount === void 0) { collisionCount = 0; }
        var polarToCartesian = function (r, t) {
            var x = r * Math.cos(t);
            var y = r * Math.sin(t);
            return { x: x, y: y };
        };
        var getPositionByQuadrant = function (radiusArray) {
            var ringCount = rings.length;
            var margin = 0.2;
            var ringIndex = rings.indexOf(entry.ring);
            var posStart = radiusArray[ringIndex] + (1 / ringCount) * margin;
            var posLength = Math.random() * (radiusArray[ringIndex + 1] - radiusArray[ringIndex] - 2 * ((1 / ringCount) * margin));
            return posStart + posLength;
        };
        var calculateRadiusDiminish = function (nrOfRings) {
            var max = 1;
            //create the array. each value represents
            //the share of total radius among rings.
            var arr = [1];
            for (var i = 1; i < nrOfRings; i++) {
                max = max * radiusDiminishConstant;
                arr.push(max);
            }
            //calculate total shares of radius
            var sum = arr.reduce(function (a, b) { return a + b; });
            arr = arr.map(function (a) { return a / sum; });
            //now, each member of the array represent
            //the starting position of ring in the
            //circle
            arr.reverse();
            for (var i = 1; i < nrOfRings; i++) {
                arr[i] = arr[i - 1] + arr[i];
            }
            //add 0 for the center of the circle
            arr.push(0);
            //sort the array so that 0 is at the start
            arr.sort();
            return arr;
        };
        var hasCollision = function (results, coordinates) {
            if (collisionCount >= MAX_COLLISION_RETRY_COUNT) {
                return false;
            }
            for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                var result = results_1[_i];
                if (Math.abs(result.x - coordinates.x) <= toleranceX && Math.abs(result.y - coordinates.y) <= toleranceY) {
                    if (++collisionCount >= MAX_COLLISION_RETRY_COUNT) {
                        console.log('max collision retry limit reached: ' + collisionCount);
                    }
                    return true;
                }
            }
            return false;
        };
        var radiusArray = calculateRadiusDiminish((props.rings || []).length);
        var randomPosition = getPositionByQuadrant(radiusArray);
        var positionAngle = Math.random();
        var ringWidth = width / 2;
        //theta is the position in the quadrant
        var theta = positionAngle * angle + quadrant_delta;
        var r = randomPosition * ringWidth;
        var data = polarToCartesian(r, theta);
        //recalculate if there is a collision
        var collision = hasCollision(results, data);
        if (collision) {
            return getRandomCoordinates(rings, entry, angle, quadrant_delta, results, collisionCount);
        }
        //report number of collisions detected
        // data.collisionCount = collisionCount;
        // return data;
        return __assign(__assign({}, data), { collisionCount: collisionCount });
    };
    var points = processRadarData(props.quadrants, rings, data);
    return (React.createElement(ThemeContext.Provider, { value: {
            fontSize: props.fontSize || fontSize,
            itemFontSize: props.itemFontSize || props.fontSize || fontSize,
            fontFamily: props.fontFamily || fontFamily,
            colorScale: props.colorScaleIndex ? getColorScale(props.colorScaleIndex) : colorScale,
            quadrantsConfig: props.quadrantsConfig || {},
        } },
        React.createElement(RadarContents, { width: width * RIGHT_EXTENSION, height: width, style: { margin: margin } },
            React.createElement("g", { transform: "translate(".concat(width / 2, ",").concat(width / 2, ")") }, props.quadrants.map(function (value, index) {
                // Get points that belong to this quadrant
                var filteredPoints = points.filter(function (element) { return element.quadrant === value; });
                return (React.createElement("g", { key: index },
                    React.createElement(Quadrant, { transform: "rotate(".concat((360 / props.quadrants.length) * index, ") translate(").concat(margin, ",").concat(margin, ")"), rotateDegrees: (360 / props.quadrants.length) * index, width: width - 2 * margin, index: index, rings: rings, points: filteredPoints, angle: angle, name: value, radiusDiminish: radiusDiminishConstant })));
            })))));
};
export default TechRadar;
