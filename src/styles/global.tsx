import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/nightCity.jpg'

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    #root {
        margin: 0 auto;
    }

    html{
        background: url(${backgroundImage}) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover; 
    }
`