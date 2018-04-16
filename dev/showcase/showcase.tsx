import * as React from 'react';
import {DynaSpeedButtons, EColor, ESize, EStyle, IDynaSpeedButtonsProps} from "../../src";

import {faIcon, IShowcase, IShowcaseViewProps} from "dyna-showcase";
import {Logo} from "../logo";

import "./showcase.less";

export default {
	logo: <Logo/>,
	views: [
		{
			slug: 'intro',
			faIconName: 'circle-o-notch',
			title: 'Introduction',
			center: true,
			component: (
				<div>
					<h3>dyn-ui-speed-buttons</h3>
				</div>
			),
		},
		{
			slug: 'sizes',
			faIconName: 'flask',
			title: 'rounded - white/black - sizes',
			center: true,
			component: (() => {

				interface IMyAppProps {
					style?: EStyle,
					size?: ESize,
					color?: EColor,
				}

				class MyApp extends React.Component<IMyAppProps> {

					public render(): JSX.Element {
						const {style, size, color} = this.props;
						return (
							<DynaSpeedButtons
								style={style}
								size={size}
								color={color}
								options={[
									{label: "1 - unselected", selected: false, value: 1},
									{label: "2 - selected", selected: true, value: 2},
									{label: "3 - unselected", selected: false, value: 3},
									{label: "4 - unselected", selected: true, value: 4},
								]}
								onClick={(value: any) => console.log('button clickec', {value})}
							/>
						);
					}
				}

				return <MyApp/>

			})(),
			wrapperStyle: {},
			props: (() => {
				const props: IShowcaseViewProps[] = [];
				Object.keys(ESize).forEach((size: ESize) => {
					Object.keys(EStyle).forEach((style: ESize) => {
						Object.keys(EColor).forEach((color: EColor) => {
							props.push({
								slug: `style-${style}--size-${size}--color-${color}`,
								title: `style-${style}  size-${size}  color-${color}`,
								props: {
									style,
									color,
									size,
								},
							}as IShowcaseViewProps)
						});
					});
				});
				return props;
			})(),
		},
		{
			slug: 'the-end',
			title: 'the end',
			description: 'Thank you',
			center: true,
			component: (
				<div style={{textAlign: 'center'}}>
					<h1>The end</h1>
					<div style={{fontSize: '20px'}}>
						<p><a href="https://github.com/aneldev/dyna-ui-button">{faIcon('github')} Github</a></p>
						<p><a href="https://www.npmjs.com/package/dyna-ui-button">{faIcon('square')} npm</a></p>
					</div>
				</div>
			),
		},
	]
}as IShowcase;
