import styled from "styled-components/macro";
import { compose, color, layout, space, position, typography } from 'styled-system';
import { TextProps } from "./types";

const Text = styled.p<TextProps>`
	${compose(
		color, 
		layout, 
		space,
		position,
		typography
	)}
`

export default Text;