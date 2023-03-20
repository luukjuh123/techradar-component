"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var Item_style_1 = require("../styles/Item.style");
var ThemeContext_1 = require("./ThemeContext");
var MAX_LENGTH = 15;
function Item(_a) {
    var rotateDegrees = _a.rotateDegrees, data = _a.data;
    var ref = (0, react_1.useRef)(null);
    var _b = (0, react_1.useContext)(ThemeContext_1.ThemeContext), itemFontSize = _b.itemFontSize, fontFamily = _b.fontFamily;
    var _c = (0, react_1.useState)(false), isHovered = _c[0], setIsHovered = _c[1];
    var shortName = data.name.length > MAX_LENGTH ? "".concat(data.name.substr(0, MAX_LENGTH), "...") : data.name;
    var onMouseToggle = function () {
        setIsHovered(!isHovered);
    };
    return (react_1.default.createElement(Item_style_1.ItemWrapper, { className: 'blip', id: "blip-".concat(data.id), transform: "rotate(".concat(rotateDegrees, ") translate(").concat(data.x, ",").concat(data.y, ")"), onMouseEnter: onMouseToggle, onMouseLeave: onMouseToggle, ref: ref, style: {
            opacity: isHovered ? '1.0' : '0.7',
            fontWeight: isHovered ? 'bold' : 'normal',
        } },
        react_1.default.createElement("circle", { r: '4px' }),
        react_1.default.createElement("text", { className: 'name', dx: '7px', dy: '7px', fontSize: itemFontSize, fontFamily: fontFamily }, isHovered ? data.name : shortName)));
}
Item.propTypes = {
    rotateDegrees: prop_types_1.default.number.isRequired,
    data: prop_types_1.default.shape({
        id: prop_types_1.default.string.isRequired,
        name: prop_types_1.default.string.isRequired,
        x: prop_types_1.default.number.isRequired,
        y: prop_types_1.default.number.isRequired,
    }).isRequired,
};
exports.default = Item;
