import styled from 'styled-components/macro';
import {
  space,
  color,
  layout,
  grid,
  background,
  border,
  borderRadius,
  position,
  shadow,
  compose,
} from 'styled-system';
import { BoxProps } from './types';

export const Box = styled.div<BoxProps>`
	${compose(
		space,
		color,
		layout,
		grid,
		background,
		border,
		borderRadius,
		position,
		shadow,
	)}
`