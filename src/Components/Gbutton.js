import btnStyle, { css } from "styled-components";

export const Button = btnStyle.a`
display: inline-block;
font-weight: 400;
color: #212529;
text-align: center;
vertical-align: middle;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: transparent;
border: 1px solid transparent;
padding: 0.375rem 0.75rem;
font-size: 1rem;
line-height: 1.5;
border-radius: 0.25rem;
${({ heroBtn }) =>
  heroBtn &&
  css`
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
    background-color: #a5a251;
    color: #fff
  `}

${({ btn_primary }) =>
  btn_primary &&
  css`
  color: #fff;
  background-color: #a5a251;
  border-color: #a5a251;
  `}

${({ btn_outline_primary }) =>
  btn_outline_primary &&
  css`
  color: #a5a251;
  border-color: #a5a251;
  `}

  ${({ btn_block }) =>
  btn_block &&
  css`
  color: #fff;
  background-color: #a5a251;
  border-color: #a5a251;
  width: 100%
  `}


`;
