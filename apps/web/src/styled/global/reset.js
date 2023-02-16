import { colors, fonts } from '@vccrn/tokens';
import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
  *,
  :before,
  :after {
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 16px;
    font-synthesis: none;
    line-height: 1.5;
    color: ${colors.font.text};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html,
  body,
  form * {
    font-family: ${fonts.text};
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
  }

  ul,
  ol {
    &[class] {
      list-style: none;
    }
  }

`;

export { Reset };
