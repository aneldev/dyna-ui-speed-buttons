import * as React from "react";
import {DynaButton, EStyle, ESize, EColor as EButtonColor} from "dyna-ui-button";

import "./DynaSpeedButtons.less";

export interface IDynaSpeedButtonsProps {
	style?: EStyle;
	color?: EColor;
	size?: ESize;
	options?: IOption[];
	onClick?: (value: any) => void;
}

export enum EColor {
	ORANGE_WHITE = "ORANGE_WHITE",
	WHITE_BLACK = "WHITE_BLACK",
	RED_WHITE = "RED_WHITE",
}

export {
	EStyle, ESize,
}

export interface IOption {
	label: string | JSX.Element;
	selected: boolean;
	value: any;
}

export class DynaSpeedButtons extends React.Component<IDynaSpeedButtonsProps> {
	static defaultProps: IDynaSpeedButtonsProps = {
		style: EStyle.ROUNDED,
		color: EColor.WHITE_BLACK,
		size: ESize.MEDIUM,
		onClick: (value: any) => undefined,
	};

	private readonly baseClassName: string = "dyna-speed-buttons";
	private readonly className = (classNames: string = ""): string => `${this.baseClassName}${classNames}`.trim();

	private getButtonColor(selected: boolean): EButtonColor {
		const {color} = this.props;
		switch (color) {
			case EColor.ORANGE_WHITE:
				if (selected) return EButtonColor.ORANGE_WHITE; else return EButtonColor.WHITE_ORANGE;
			case EColor.WHITE_BLACK:
				if (selected) return EButtonColor.BLACK_WHITE; else return EButtonColor.WHITE_BLACK;
			case EColor.RED_WHITE:
				if (selected) return EButtonColor.RED_WHITE; else return EButtonColor.WHITE_RED;
		}
	}

	public render(): JSX.Element {
		const {
			style, size, options, onClick
		} = this.props;

		const className: string = [
			'dyna-speed-buttons',
			this.className(`__style-${style}`),
		].join(' ').trim();

		return (
			<div className={className}>
				{options.map((option: IOption, index: number) => {
					return (
						<DynaButton
							key={index}
							style={style}
							color={this.getButtonColor(option.selected)}
							size={size}
							onClick={() => onClick(option.value)}
						>{option.label}</DynaButton>
					);
				})}
			</div>
		);
	}
}
