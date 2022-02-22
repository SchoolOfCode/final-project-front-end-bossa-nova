import { createGlobalStyle } from "styled-components";
import resetStyle from "./resetStyle";

const breakpoints = {
  desktop: "920px",
};

const GlobalStyle = createGlobalStyle`
    html {
    {/* Imported global styles from AdjustedCSS branch */}
      --default-font: #0b0d17;
      --default-bg: #ebf5fb;
      --header-bg: #21618c;
      --row-bg: #85c1e9;
      --submit-btn: #a2d9ce;
      --sidebar-bg: #d6eaf8;
      --accent: #fa9583;
      --accent-light: #f4dfcc;

    /* Fonts */
    --font-family: "Lato", sans-serif;

    --h1: 4rem;
    --h2: 2.75rem;
    --h3: 2rem;
    --h4: 1.5rem;
    --sidebar: 1.2rem;
    --body: 1rem;
    --nav: 0.875rem;

    --thin: 100;
    --light: 300;
    --reg: 400;
    --bold: 700;
    --extra-bold: 900;

    --letter-space: 2px;

    /* Spacing */
    --spacing-sm: 0.5em;
    --spacing-md: 1em;
    --spacing-lg: 2em;

{/* Imported global styles from Ben's branch */}
        --color-dark: #656565;
        --color-light: #ebf5fb; {/* Changed to light blue background in design */}
        --color-dark-contrast: var(--color-light);
        --color-light-contrast: var(--color-dark);
        --color-dark-hover: #4d4d4d;
        --color-light-hover: #ededed;
        --color-gray: rgba(0,0,0, 0.5);
        --color-gray-contrast: var(--color-light);
        --color-primary: #ff6358;
        --color-primary-rgb: 255,99,88;
        --color-primary-contrast: var(--color-light);
        --color-primary-hover: #ff6358;
        --color-secondary: #03a9f4;
        --color-secondary-rgb: 3,169,244;
        --color-secondary-contrast: var(--color-light);
        --color-secondary-hover: #03a9f4;
        --color-green: #37b400;
        --color-green-contrast: var(--color-light);
        --color-red: #f31700;
        --color-red-contrast: var(--color-light);
        --color-orange: #ffc000;
        --color-orange-contrast: var(--color-dark);
        --color-blue: #0058e9;
        --color-blue-contrast: var(--color-light);
        --color-border: rgba(0,0,0, .08);
        --color-border-hover: rgba(0,0,0, .15);
        --border-radius: 15px; {/* Changed to border-radius in design */}
        --box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25); {/* Added to match box-shadow in design */}
{/* Changed to em because it'll change according to the font sizes */}
        --space-0: 0;
        --space-1: 0.25em;
        --space-2: 0.5em;
        --space-3: 1em;
        --space-4: 2em;
        --space-5: 4em;
        --space-6: 8em;
        --primary-font: 'Lato', sans-serif;
{/* Changed to rem because thats a responsive unit for font-sizes - this might need to be altered later */}
        --fsize-1: 0.75rem;
        --fsize-2: 0.875rem;
        --fsize-3: 1rem;
        --fsize-4: 1.125rem;
        --fsize-5: 1.25rem;
        --fsize-6: 1.5rem;
        --fsize-7: 1.75rem;
        --fsize-8: 2rem;
        --fsize-9: 2.5rem;
        --height-input: var(--space-4);
        --height-button: var(--space-4);
        --min-width-button: var(--space-4);
        --px-button: var(--space-2);
        --navbar-width: 256px;

        @media(min-width: ${breakpoints.desktop}) {
            --height-button: calc(var(--space-4) + 8px); 
            --px-button: calc(var(--space-2) + 8px);

{/* Changed font-sizes for desktop screens - this might need to be altered later */}
            --fsize-1: 0.875rem;
            --fsize-2: 1rem;
            --fsize-3: 1.125rem;
            --fsize-4: 1.25rem;
            --fsize-5: 1.5rem;
            --fsize-6: 1.75rem;
            --fsize-7: 2rem;
            --fsize-8: 2.5rem;
            --fsize-9: 3rem;
        }
    }
    ${resetStyle}
    body {
        font-size: var(--fsize-3);
        font-family: var(--primary-font);
        background-color: var(--color-light);
        color: var(--color-dark);
    }
    h1, h2, h3, h4, h4, h5, h6 {
        font-weight: 700;
    }
    h1 {
        font-size: var(--fsize-9);
    }
    h2 {
        font-size: var(--fsize-8);
    }
    h3 {
        font-size: var(--fsize-7);
    }
    h4 {
        font-size: var(--fsize-6);
    }
    h5 {
        font-size: var(--fsize-5);
    }
    h6 {
        font-size: var(--fsize-4);
    }
    p {
        font-size: var(--fsize-4);
        margin: 15px 0;
    }
    a {
        text-decoration: none;
        color: var(--color-primary);
    }
    a:hover {
        text-decoration: underline;
        color: var(--color-primary-hover);
    }
    input {
        height: 28px;
    }
    textarea {
        min-width: 220px;
        min-height: 120px;
    }
    
    .visually-hidden {
        position: absolute !important;
        height: 1px;
        width: 1px;
        overflow: hidden;
        clip: rect(1px, 1px, 1px, 1px);
        opacity: 0;
    }
`;

export default GlobalStyle;
export { breakpoints };
