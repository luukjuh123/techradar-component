import React, { useState, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { ItemWrapper } from '../styles/Item.style';
import { ThemeContext } from './ThemeContext';
var MAX_LENGTH = 15;
function Item(_a) {
    var rotateDegrees = _a.rotateDegrees, data = _a.data;
    var ref = useRef(null);
    var _b = useContext(ThemeContext), itemFontSize = _b.itemFontSize, fontFamily = _b.fontFamily;
    var _c = useState(false), isHovered = _c[0], setIsHovered = _c[1];
    var shortName = data.name.length > MAX_LENGTH ? "".concat(data.name.substr(0, MAX_LENGTH), "...") : data.name;
    var onMouseToggle = function () {
        setIsHovered(!isHovered);
    };
    return (React.createElement(ItemWrapper, { className: 'blip', id: "blip-".concat(data.id), transform: "rotate(".concat(rotateDegrees, ") translate(").concat(data.x, ",").concat(data.y, ")"), onMouseEnter: onMouseToggle, onMouseLeave: onMouseToggle, ref: ref, style: {
            opacity: isHovered ? '1.0' : '0.7',
            fontWeight: isHovered ? 'bold' : 'normal',
        } },
        React.createElement("circle", { r: '4px' }),
        React.createElement("text", { className: 'name', dx: '7px', dy: '7px', fontSize: itemFontSize, fontFamily: fontFamily }, isHovered ? data.name : shortName)));
}
Item.propTypes = {
    rotateDegrees: PropTypes.number.isRequired,
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }).isRequired,
};
export default Item;
