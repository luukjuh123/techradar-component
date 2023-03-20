import React from 'react';
interface PathProps {
    quadIndex: number;
    ringIndex: number;
    ringWidth: number;
    ringsLength: number;
    quad_angle: number;
    outerRadius: number;
    innerRadius: number;
    title?: string | null;
}
declare const Path: React.FC<PathProps>;
export default Path;
