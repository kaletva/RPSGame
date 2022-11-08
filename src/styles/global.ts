import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
    }
    body{
        height: 100vh;
        background: radial-gradient(circle, #1f3756 0%, #141539 100%);
    }
 `