import css from 'styled-jsx/css';

import {fonts, sizes, colors, breakpoints} from '@styles/config';

const globals = css.global`
    * {
        margin: 0;
        padding: 0;
    }    
        
    body {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        font-family: ${fonts.base};
        font-size: ${sizes.fontSize};
        color: ${colors.blackColor};
        background-color: ${colors.whiteColor};
        box-sizing: border-box;
    }

    main {
        height: 100%;
        min-height: max-content;
    }

    header {
        width: 100%;
        height: max-content;
        display: flex;
    }

    a {
        text-decoration: none;
    }

    p {
        text-align: justify;
    }
`;

export default globals;