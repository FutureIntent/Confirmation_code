import { createGlobalStyle } from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SurfiniteBoldWoff2 from '@assets/fonts/Surfinite-Bold.woff2';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SurfiniteRegularWoff2 from '@assets/fonts/Surfinite-Regular.woff2';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SurfiniteMediumWoff2 from '@assets/fonts/Surfinite-Medium.woff2';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mediaQueries from '@theme/configs/mediaQueries';

import { FONT_FAMILY, fontsConfig } from '@components/atoms/Typography/Typography';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Surfinite";
    font-weight: 700;
    src: url(${SurfiniteBoldWoff2}) format('woff2');
    font-display: swap;
    font-style: normal;
  }

  @font-face {
      font-family: "Surfinite";
      font-weight: 500;
      src: url(${SurfiniteMediumWoff2}) format('woff2');
      font-display: swap;
      font-style: normal;
  }

  @font-face {
    font-family: "Surfinite";
    font-weight: 400;
    src: url(${SurfiniteRegularWoff2}) format('woff2');
    font-display: swap;
    font-style: normal;
  }

  :root {
    --header-height: 50px;
    --footer-height: auto;

    ${mediaQueries.tablet} {
        --header-height: 60px;
    }
    //
    // ${mediaQueries.laptopS} {
    //   --footer-height: 360px;
    // }
  }

  html {
      scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: ${FONT_FAMILY}, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light
            ? theme.colors.light.lightGrey
            : theme.colors.dark.eclipseDark};
  }

  body.no-scroll {
    overflow-y: hidden;
  }

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  svg {
    fill: currentColor;
  }

  textarea, select, input {
    outline: unset;
    border: 0;
    width: 100%;
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: 8px;

    &:disabled {
      opacity: 32%;
    }
  }

  a {
    text-decoration: none;

    svg {
      vertical-align: middle;
    }
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  .tl-edges, .tl-wrapper {
      min-height: 100vh;
  }

  .tl-wrapper {
      display: flex;
      flex-direction: column;
  }

  .chakra-modal__overlay {
    z-index: ${({ theme }) => theme.zIndices.overlay};
    background-color: rgba(38, 45, 71, 0.8);
  }

  .chakra-modal__content-container {
    justify-content: center;
    align-items: center;
    z-index: ${({ theme }) => theme.zIndices.modal};
  }

  .chakra-modal__content {
    justify-content: center;
    align-items: center;
    min-width: 280px;
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light
            ? theme.colors.commons.white
            : theme.colors.dark.eclipseMedium}
  }

  .cc-container {
      position: fixed;
      display: flex;
      flex-wrap: wrap;justify-content: center;
      left: 0;
      width: 100%;
      z-index: 9999;
      bottom: 0;
      align-items: center;
      gap: 20px;

      background-color: ${({ theme }) => theme.mode === ColorMode.light ? theme.colors.light.darkGrey : theme.colors.dark.eclipseLight};
      color: ${({ theme }) =>
              theme.mode === ColorMode.light ? theme.colors.commons.white : theme.colors.dark.grey};
      padding: 30px clamp(15px,calc(45 / 1830 * 100vw) ,45px);
  }
  .cc-content {
      ${{ ...fontsConfig.h4 }};
      max-width: 70%;
      min-width: 300px;

      a {
          color: ${({ theme }) => theme.mode === ColorMode.light ? theme.colors.light.success : theme.colors.dark.successNight};
          text-decoration: underline;
          margin-left: 5px;
      }
  }
`;

export default GlobalStyle;
