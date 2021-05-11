import styled, { css } from "styled-components";
import { Nav } from "react-bootstrap";

export const CustomNav = styled(Nav)`
  border-bottom: solid 1px #cccccc;
  margin-bottom: 16px;
 // width: 90%;
  //margin: auto;
`;

export const CustomNavLink = styled(Nav.Link)`
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #676767;
  :hover {
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #676767;
    background-color: #eee;
  }
  ${(props) => {
    if (props.activateTab) {
      return css`
        border-bottom-color: #00532a;
        color: #00532a !important;
        padding-bottom: 6px;
        border-bottom-width: 5px;
        border-bottom-style: solid;
        :hover {
          border-bottom-color: #00532a;
          color: #00532a !important;
          padding-bottom: 6px;
          border-bottom-width: 5px;
          border-bottom-style: solid;
          background-color: #eee;
        }
      `;
    }
  }}
`;
