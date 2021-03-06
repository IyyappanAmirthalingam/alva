import { Color } from '../colors';
import { fonts } from '../fonts';
import * as React from 'react';
import styled from 'styled-components';
import { Copy, CopySize } from '../copy';
import { IconSize } from '../icons';
import { Space, SpaceSize } from '../space';
import * as ColorTool from 'color';
const Icon = require('react-feather');

export interface LinkIconProps {
	children?: React.ReactNode;
	color?: Color;
	icon: string;
	onClick?: React.MouseEventHandler<HTMLElement>;
	size: CopySize;
	rotate?: boolean;
}

const StyledLink = styled.div`
	display: flex;
	color: ${(props: LinkIconProps) => props.color};
	${(props: LinkIconProps) =>
		props.size === CopySize.M &&
		`
		align-items: center;
	`};

	&:active {
		color: ${new ColorTool((props: LinkIconProps) => props.color).darken(0.25).toString()};
	}
`;

export const LinkIcon: React.SFC<LinkIconProps> = props => {
	const IconImage = Icon.hasOwnProperty(props.icon) ? Icon[props.icon] : Icon.Box;

	return (
		<StyledLink {...props}>
			<IconImage stroke-width={1.5} size={getIconSize(props.size)} strokeWidth={1.5} />
			<Space sizeRight={SpaceSize.XS} />
			<Copy size={props.size}>{props.children}</Copy>
		</StyledLink>
	);
};

function getIconSize(copySize: CopySize): IconSize {
	switch (copySize) {
		case CopySize.S:
			return IconSize.XS;
		case CopySize.M:
			return IconSize.S;
	}
}
