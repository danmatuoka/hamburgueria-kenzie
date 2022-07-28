import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
	/* Primary palette */
	--color-primary: #27AE60;
	--color-primary-50: #93D7AF;
	--color-secunday: #EB5757;

	/* Grey scale palette */
	--grey-100: #333333;
	--grey-50: #828282;
	--grey-20: #E0E0E0;
	--grey-0: #F5F5F5;

}

html, body, div, span,h1, h2, h3, h4, h5, h6, p,
a, em, img, strong, var,
b, u, i, ol, ul, li,
fieldset, form, label, legend,article, aside,
figure, figcaption, footer, header,
menu, nav, input, section {
	margin: 0;
	padding: 0;
	font: inherit;
	font-family: 'Inter', sans-serif;
    font-size: 62.5%;
	vertical-align: baseline;
	box-sizing: border-box;
}
`;

export default GlobalStyle;
