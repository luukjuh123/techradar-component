import React from 'react';
interface RadarProps {
    quadrants: string[];
    rings?: string[];
    data?: {
        id: number;
        name: string;
        quadrant: string;
        ring: string;
    }[];
    width?: number;
    fontSize?: number;
    itemFontSize?: number;
    colorScaleIndex?: number;
    radiusDiminish?: number;
    margin?: number;
    fontFamily?: string;
    quadrantsConfig?: Record<string, any>;
}
declare const TechRadar: React.FC<RadarProps>;
export default TechRadar;
