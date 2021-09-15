import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'palanquinlight';
        src: url('/fonts/palanquin/palanquin-light-webfont.woff2') format('woff2'),
            url('/fonts/palanquin/palanquin-light-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'palanquinmedium';
        src: url('/fonts/palanquin/palanquin-medium-webfont.woff2') format('woff2'),
            url('/fonts/palanquin/palanquin-medium-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'palanquinbold';
        src: url('/fonts/palanquin/palanquin-bold-webfont.woff2') format('woff2'),
            url('/fonts/palanquin/palanquin-bold-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'playfair-black-italic';
        src: url('/fonts/playfair-display/PlayfairDisplay-BlackItalic.woff2') format('woff2'),
            url('/fonts/playfair-display/PlayfairDisplay-BlackItalic.woff') format('woff');
        font-weight: 900;
        font-style: italic;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'playfair-italic';
        src: url('/fonts/playfair-display/PlayfairDisplay-Italic.woff2') format('woff2'),
            url('/fonts/playfair-display/PlayfairDisplay-Italic.woff') format('woff');
        font-weight: normal;
        font-style: italic;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'playfair-black';
        src: url('/fonts/playfair-display/PlayfairDisplay-Black.woff2') format('woff2'),
            url('/fonts/playfair-display/PlayfairDisplay-Black.woff') format('woff');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'playfair-regular';
        src: url('/fonts/playfair-display/PlayfairDisplay-Regular.woff2') format('woff2'),
            url('/fonts/playfair-display/PlayfairDisplay-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    
    html {
        min-height: 100%;
    }

    body {
        --margin: 130px;
        --mobile-margin: 20px;
        
        --font-sans: 'palanquinlight', sans-serif;
        --font-sans-medium: 'palanquinmedium', sans-serif;
        --font-sans-bold: 'palanquinbold', sans-serif;
        --font-serif: 'playfair-regular', serif;
        --font-serif-italic: 'playfair-italic', serif;
        --font-serif-black: 'playfair-black', serif;
        --font-serif-black-italic: 'playfair-black-italic', serif;
        
        --main: #882b93;
        --main-hover: #D6425D;
        --secondary: #D4AFCD;
        --secondary-hover: #E06C81;
        --black: #000;
        --grey-dark: #707070;
        --grey-middark: #939393;
        --grey-mid: #C9C9C9;
        --grey-light: #eee;
        --white: #fff;
        --shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        --shadow-hover: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        
        font-family: var(--font-sans);
        padding: 0;
        margin: 0;
        color: var(--black);
        font-size: 20px;
        
        h1,
        h2,
        h3,
        h4 {
            font-family: var(--font-sans-bold);
        }
        
        h5,
        h6 {
            font-family: var(--font-sans-medium);
        }
        
        h1 {
            font-size: 4.5em;
            line-height: 100px;
        }
        
        a {
            cursor: pointer;
            text-decoration: none;
            color: var(--black);
            
            :hover {
                color: var(--grey-dark)
            }
        }
    }
    
    .desktop-only {
        display: block;
    }
    .mobile-only {
        display: none;
    }
    
    .grid {
        margin: 0 var(--margin);
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 100px;
        grid-row-gap: 0;
        display: grid; 

      .split-image{
        margin: 0;
      }
      
    }
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgb(0, 0, 0, 0.4);
    }
    .coral-bg-text {
        background: var(--main);
        color: var(--white);
        font-family: var(--font-sans-bold);
        padding: 0 10px;
        display: inline;
        text-align: center;
        border: none;
    }
    .spotify-bg-text {
      background: var(--spotify);
      color: var(--white);
      font-family: var(--font-sans-bold);
      padding: 0 10px;
      display: inline;
      text-align: center;
      border: none;
      
      :hover{
        background: var(--spotify-hover);
      }
    }
    
    @media only screen and (max-width: 1024px) {
        body {
            min-width: 0;
            width: 100vw;
            overflow-x: hidden;
            font-size: 14px;
            
            h1 {
                font-size: 40px;
                line-height: 1;
            }
            h3 {
                font-size: 24px;
            }
        }
        
        .desktop-only {
            display: none;
        }
        .mobile-only {
            display: block;
        }
        .grid {
          margin: 0 var(--mobile-margin);
          grid-template-columns: repeat(4, 1fr);
          grid-column-gap: 10px;
      }
    }
`

export default GlobalStyle
