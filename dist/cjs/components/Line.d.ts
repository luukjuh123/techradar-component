/// <reference types="react" />
import PropTypes from 'prop-types';
interface LineProps {
    x2: number;
    y2: number;
    stroke: string;
}
declare function Line({ x2, y2, stroke }: LineProps): JSX.Element;
declare namespace Line {
    var propTypes: {
        x2: PropTypes.Validator<number>;
        y2: PropTypes.Validator<number>;
        stroke: PropTypes.Validator<string>;
    };
}
export default Line;
