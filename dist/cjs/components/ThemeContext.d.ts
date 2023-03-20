/// <reference types="react" />
export declare const colorScales: {
    name: string;
}[];
export interface ThemeContextType {
    colorScale: (index: number) => string;
    fontSize: number;
    fontFamily: string;
    itemFontSize: number;
    quadrantsConfig: Record<string, any>;
}
export declare function getColorScale(colorScaleIndex: number): any;
export declare const ThemeContext: import("react").Context<ThemeContextType>;
