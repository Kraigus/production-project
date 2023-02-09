/* eslint-disable no-undef */
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const className: IClassNames;
    export = className;
}
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;
