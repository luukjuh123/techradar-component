/// <reference types="react" />
interface TextProps {
    dx: number;
    dy: number;
    name: string;
    fontSize: number;
    fontFamily: string;
}
declare function Text({ dx, dy, name }: TextProps): JSX.Element;
export default Text;
