import styled from "styled-components/macro";
import { color, compose, layout, space, typography } from "styled-system";
import { TableProps, TdProps } from "./types";

export const Table = styled.table<TableProps>`
	table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
	text-align: left;
	
	${compose(color, layout, space)}
`;

export const Tr = styled.tr<TableProps>`
	${compose(color, layout, space)}
`

export const Th = styled.th<TdProps>`
	color: hsla(0, 0%, 33%, 0.5);
	font-size: 14px;
	font-weight: 600;
	padding-bottom: 16px;

	${compose(color, layout, space, typography)}
`

export const Td = styled.td<TdProps>`
	font-weight: 600;
	padding: 10px 0;

	& > {
		vertical-align:  middle;
	}

	${compose(color, layout, space, typography)}
`