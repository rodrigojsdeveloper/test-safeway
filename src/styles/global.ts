import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Lexend', sans-serif;
	}

	:root {
    --color-primary: #466C9B;
    --color-primary-50: #325075;

		--gray-100: #333333;
    --grey-50: #828282;
    --grey-20: #E0E0E0;
    --grey-10: #BDBDBD;
    --grey-0: #F5F5F5;
    --white: #FFFFFF;

		--shadow: rgba(0, 0, 0, 0.5)
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
