import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { MdShare } from "react-icons/md";
import { Container } from "react-bootstrap";
import * as S from "./banner.styled";
const Banner = () => {
  const [value, setValue] = useState(4);

  return (
    <S.BannerContainer>
      <Container>
        <S.BannerRow>
          <S.BannerCol xs={12} lg={11}>
            <S.BannerHeader>TUXA หลักสูตรปริญญาโทออนไลน์</S.BannerHeader>
            <S.BannerHeaderDetail>
              <h1>Design Thinking กระบวนการคิดเชิงออกแบบ</h1>
            </S.BannerHeaderDetail>
            <S.BannerDegreeContainer>
              <S.BannerDegree>
                ปริญญาโทบริหารธุรกิจ สาขา Business Innovation
              </S.BannerDegree>
            </S.BannerDegreeContainer>
          </S.BannerCol>
        </S.BannerRow>
        <S.ReviewDetail>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <S.RatingStar
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <S.RatingReview>4.7 (615 รีวิว)</S.RatingReview>
            <S.ShareButton>
            <S.ShareText><MdShare/> แชร์คอร์สนี้</S.ShareText>
          </S.ShareButton>
          </Box>
        
        </S.ReviewDetail>
      </Container>
    </S.BannerContainer>
  );
};

export default Banner;
