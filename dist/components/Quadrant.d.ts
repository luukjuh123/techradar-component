import React from 'react';
interface QuadrantProps {
    transform: string;
    rotateDegrees: number;
    width: number;
    index: number;
    rings: string[];
    points: {
        id: number;
        name: string;
        quadrant: string;
        ring?: string;
        x: number;
        y: number;
    }[];
    angle: number;
    name: string;
    radiusDiminish?: number;
}
declare const Quadrant: React.FC<QuadrantProps>;
export default Quadrant;
