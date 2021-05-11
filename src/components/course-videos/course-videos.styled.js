import styled from "styled-components";

export const PlayListContainer = styled.div`
  margin: 0px 0px 10px 0px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #676767;
`;

export const PlayListTitle = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  padding: 5px;
  margin: 0px 0px 1px 0px;
  color: #fff;
  background-color: #7b7b7b;
`;

export const VideoSection = styled.div`
  position: relative;
  padding-right: 185px;
  margin: 8px;
  background-color: #fff;
  cursor: default;
  overflow: hidden;
`;

export const VideoTitle = styled.div`
  position: relative;
  padding-right: 185px;
  margin: 8px;
  background-color: #fff;
  cursor: default;
  overflow: hidden;
`;

export const VideoAction = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
`;

export const PreviewText = styled.span`
  background-color: #5cb85c;
  margin-right: 8px;
  display: inline;
  padding: 0.2em 0.6em 0.3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25em;
  letter-spacing: 0.3px;
`;

export const PlayIcon = styled.span`
  line-height: 0px;
  margin-right: 8px;
  margin: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
`;

export const VideoDuration = styled.div`
      width: 71px;
    text-align: right;
    color: #04542b;
    cursor: pointer;
    font-size: 13px;

`;
