import { ColorProps, LayoutProps, SpaceProps, TypographyProps } from "styled-system";


export interface TableProps extends ColorProps, LayoutProps, SpaceProps {}

export interface TdProps extends TableProps, TypographyProps {}