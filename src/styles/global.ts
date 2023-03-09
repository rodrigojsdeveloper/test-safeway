import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Lexend', sans-serif;
		scroll-behavior: smooth;
	}

	:root {
    --color-primary: #1877F2;
    --color-primary-50: #4267B2;

		--gray-100: #333333;
    --grey-50: #828282;
    --grey-20: #E0E0E0;
    --grey-10: #BDBDBD;
    --grey-0: #F5F5F5;
    --white: #FFFFFF;
  }

	body {
    background-color: var(--white);
    color: var(--gray-100);
	}
  
	button, a {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}

	&::-webkit-scrollbar {
    display: none;
  }
`;
