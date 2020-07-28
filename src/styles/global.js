import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
      *{
        margin: 0;
        padding: 0; 
        outline: none;
        box-sizing: border-box;

    }

    html, body, #root{
        min-height: 100%;
        -webkit-font-smoothing: antialiased !important;

    }

    body, input, button{
        color: #222;
        font-family: Arial, Helvetica, sans-serif;
    }

    button{
		border: none;
		cursor: pointer;
	}


`;