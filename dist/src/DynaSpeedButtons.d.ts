import * as React from "react";
import { EStyle, ESize } from "dyna-ui-button";
import "./DynaSpeedButtons.less";
export interface IDynaSpeedButtonsProps {
    style?: EStyle;
    color?: EColor;
    size?: ESize;
    options?: IOption[];
    onClick?: (value: any) => void;
}
export declare enum EColor {
    ORANGE_WHITE = "ORANGE_WHITE",
    WHITE_BLACK = "WHITE_BLACK",
    RED_WHITE = "RED_WHITE",
}
export { EStyle, ESize };
export interface IOption {
    label: string | JSX.Element;
    selected: boolean;
    value: any;
}
export declare class DynaSpeedButtons extends React.Component<IDynaSpeedButtonsProps> {
    static defaultProps: IDynaSpeedButtonsProps;
    private readonly baseClassName;
    private readonly className;
    private getButtonColor(selected);
    render(): JSX.Element;
}
