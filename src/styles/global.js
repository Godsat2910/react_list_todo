import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
        font-family: 'Inter', sans-serif;
    }
`

export default globalStyle;