import styled, { css } from "styled-components";

export const OverAllContainer = styled.div`
  margin-bottom: 30px;
`;
export const DetailContainer = styled.div`
  max-height: 100px;
  overflow: hidden;
  ${(props) => {
    if (props.expand) {
      return css`
        max-height: 100%;
        overflow: none;
      `;
    }
  }}
`;

export const TextStyle = styled.p`
  font-size: 1em;
  padding: 10px 0 0 0;
  font-weight: 300;
  margin-top: 0px;
  line-height: 140%;
  text-align: left;
  color: #555555;
`;

export const RealAllButton = styled.div`
  cursor: pointer;
  //margin-top: 12px;
  //line-height: 20px;
  //letter-spacing: 0.05em;
  color: #676767;
  font-size: 18px;
`;
