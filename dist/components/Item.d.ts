/// <reference types="react" />
import PropTypes from 'prop-types';
interface ItemProps {
    rotateDegrees: number;
    data: {
        id: number;
        name: string;
        x: number;
        y: number;
    };
}
declare function Item({ rotateDegrees, data }: ItemProps): JSX.Element;
declare namespace Item {
    var propTypes: {
        rotateDegrees: PropTypes.Validator<number>;
        data: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            id: PropTypes.Validator<string>;
            name: PropTypes.Validator<string>;
            x: PropTypes.Validator<number>;
            y: PropTypes.Validator<number>;
        }>>>;
    };
}
export default Item;
