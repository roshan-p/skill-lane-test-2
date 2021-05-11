import styled from "styled-components";

export const SearchContainer = styled.div`
  @media only screen and (max-width: 1199px) {
    display: block;
    width: 100%;
    margin-top: 20px;
  }
`;
export const SearchField = styled.input`
  background-color: #ffffff;
  border: 1pt solid #dedede;
  height: 30px;
  border-radius: 8px;
  padding-left: 5px;
  width: 198px;
  margin: 9px 0px 10px 16px;
  font-size: 18px;
  line-height: 22px;
  padding: 0px 27px 0px 10px;
  @media only screen and (max-width: 1199px) {
    width: 100%;
  }
`;

export const SearchBtn = styled.button`
  background-color: transparent;
  padding: 0px;
  color: #dddddd;
  font-size: 18px;
  position: relative;
  left: -30px;
  margin-bottom: 1px;
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  white-space: nowrap;
  border: none;
  @media only screen and (max-width: 1199px) {
    left: calc(100% - 10px);
    top: -39px;
  }
`;
