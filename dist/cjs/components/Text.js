"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var Text_style_1 = tslib_1.__importDefault(require("../styles/Text.style"));
var ThemeContext_1 = require("./ThemeContext");
function Text(_a) {
    var dx = _a.dx, dy = _a.dy, name = _a.name;
    var _b = (0, react_1.useContext)(ThemeContext_1.ThemeContext), fontSize = _b.fontSize, fontFamily = _b.fontFamily;
    return (react_1.default.createElement(Text_style_1.default, { className: 'quadrant', fontSize: fontSize, fontFamily: fontFamily, dx: dx, dy: dy }, name));
}
exports.default = Text;
