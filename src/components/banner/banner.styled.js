import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";
export const BannerContainer = styled.div`
  background-color: white;
  background-size: cover;
  background-image: url(https://resource.skilllane.com/banner_academic/tu_banner.png);
  padding-top: 35px;
  padding-bottom: 30px;
  margin-bottom: 20px;
`;

export const BannerRow = styled(Row)`
  margin-left: -15px;
  margin-right: -15px;
`;
export const BannerCol = styled(Col)`
  width: 100%;
`;
export const BannerHeader = styled.span`
  display: inline-flex;
  width: 55px;
  height: 12px;
  color: #d13434;
  width: 100%;
`;

export const BannerHeaderDetail = styled.div`
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #676767;
  width: 100%;
  margin-bottom: 10px;
`;

export const BannerDegreeContainer = styled.div`
  margin-bottom: 12px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #676767;
  width: 100%;
  font-size: 14px;
`;

export const BannerDegree = styled.a`
  max-width: 100%;
  color: #555;
  border: 1px solid #555;
  background: #fff;
  border-radius: 20px;
  padding: 3px 10px;
  transition: 0.2s;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 5px;
  cursor: pointer;
  text-decoration: none;
`;

export const ReviewDetail = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;

export const RatingReview = styled.h3`
  color: #8e8e8e;
  font-size: 1.33em;
  font-weight: normal;
  display: inline;
  margin:5px;
`;
export const RatingStar = styled(Rating)`
  font-size: 1.8rem;
`;

export const ShareButton = styled.div`
  margin:5px;
  border-color: #00532a;
  border-style: solid;
  border-radius: 2px;
  border-width: 1px;
  padding: 2px 8px;
  width: 105px;
  display: inline;
  cursor: pointer;
`;

export const ShareText = styled.span`
  border: 0;
  outline: 0;
  vertical-align: baseline;
  color: #00532a;
  font-size: 1em;
`;
