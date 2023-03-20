import PropTypes from 'prop-types';
import React from 'react';
function Line(_a) {
    var x2 = _a.x2, y2 = _a.y2, stroke = _a.stroke;
    return React.createElement("line", { x1: '0', y1: '0', x2: x2, y2: y2, stroke: stroke });
}
Line.propTypes = {
    x2: PropTypes.number.isRequired,
    y2: PropTypes.number.isRequired,
    stroke: PropTypes.string.isRequired,
};
export default Line;
