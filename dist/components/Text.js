import React, { useContext } from 'react';
import TextWrapper from '../styles/Text.style';
import { ThemeContext } from './ThemeContext';
function Text(_a) {
    var dx = _a.dx, dy = _a.dy, name = _a.name;
    var _b = useContext(ThemeContext), fontSize = _b.fontSize, fontFamily = _b.fontFamily;
    return (React.createElement(TextWrapper, { className: 'quadrant', fontSize: fontSize, fontFamily: fontFamily, dx: dx, dy: dy }, name));
}
export default Text;
