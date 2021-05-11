import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { MdDone, MdClear } from "react-icons/md";

export const VideoContainer = styled(Col)`
  margin-bottom: 10px;
`;
export const CoursePrice = styled(Col)`
  margin-bottom: 10px;
`;

export const CourseContainer = styled(Container)`
  /* width: 61%; */
`;
export const CoursePriceDetailRow = styled(Row)`
  border-color: #aaa;
  margin: 0px;
  padding: 0px 10px 10px;
  border-style: solid;
  border-width: 1px;
  min-height: 100%;
`;
export const PurhcasePrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  line-height: 1;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;
export const Price = styled.span`
  font-size: 2em;
  margin-bottom: 8px;
`;
export const AuditButton = styled.button`
  font-size: 1em !important;
  height: 50px;
  width: 100%;
  border-radius: 4px;
  border-style: none;
  display: inline-block;
  line-height: 126%;
  cursor: pointer;
  padding: 12px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: #024825;
  border: 1px solid #024825;
  margin-bottom: 10px;
  :hover {
    background: #00532a;
    color: #fff;
    border: 1px solid #024825;
  }
`;
export const PruchaseButton = styled.button`
  font-size: 1em !important;
  height: 50px;
  width: 100%;
  border-radius: 4px;
  border-style: none;
  display: inline-block;
  line-height: 126%;
  cursor: pointer;
  padding: 12px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: #00532a;
  color: #fff;
  border: 1px solid #024825;
  margin-bottom: 10px;
  :hover {
    background: #005c2e;
    color: #fff;
    border: 1px solid #024825;
  }
`;

export const CourseDetail = styled(Col)`
  margin-bottom: 10px;
`;

export const CheckIcon = styled(MdDone)`
  color: #00532a;
  float: left;
  margin-right: 10px;
`;
export const CrossIcon = styled(MdClear)`
  color: #8e8e8e;
  float: left;
  margin-right: 10px;
`;

export const CourseItem = styled.p`
  padding-bottom: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  padding-top: 0px;
  font-size: 0.9em;
  font-weight: normal;
  line-height: 1;
  display: flex;
`;

export const BorderLine = styled.div`
  height: 4px;
  margin-bottom: 14px;
`;

export const GrrenBorderLine = styled.div`
  height: 4px;
  margin-bottom: 14px;
  background-color: #024825;
`;
