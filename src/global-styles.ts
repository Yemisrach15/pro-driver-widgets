import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*, *::after, *::before {
		box-sizing: border-box;
		font-family: 'Inter', sans-serif;
		padding: 0;
		margin: 0;
	}

	body {
		background: #E5E5E5;
		color: hsla(0, 0%, 20%, 1);
		padding: 24px;
	}
`