import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `;
};
export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 1023px) {
      ${props}
    }
  `;
};
export const special = (props) => {
  return css`
    @media only screen and (max-height: 800px) {
      ${props}
    }
    @media only screen and (max-width: 1300px) {
      ${props}
    }
  `;
};
