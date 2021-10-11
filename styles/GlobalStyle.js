import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    
    html {
        min-height: 100%;
    }

    body {
        --margin: 40px;
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
            line-height: 1em;
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
    
    .content {
        margin: 80px var(--margin) 0;
      
    }
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgb(0, 0, 0, 0.4);
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
        .content {
          margin: 80px var(--mobile-margin) 0;
      }
    }
`

export default GlobalStyle
