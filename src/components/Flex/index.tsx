import styled from "styled-components/macro";
import { compose, flex, flexbox, space, layout, color, system } from 'styled-system';
import { Box } from "../Box";
import { FlexProps } from "./types";

const gap = system({
  gap: {
    property: 'gap',
		scale: 'space',
  },
});

const Flex = styled(Box)<FlexProps>`
	display: flex;

	${compose(flex, flexbox, space, layout, color, gap)}
`

export default Flex;