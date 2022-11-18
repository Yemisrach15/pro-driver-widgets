import styled from "styled-components/macro";
import { compose, color, layout, space, border } from 'styled-system';
import { HorizontalLineProps } from "./types";

export const HorizontalLine = styled.hr<HorizontalLineProps>`
	width: 100%;
	border: none;
	background-color: hsla(0, 0%, 85%, 0.5);

	${compose(color, layout, space, border)}
`