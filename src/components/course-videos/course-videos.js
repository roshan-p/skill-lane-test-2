import React  from "react";
import { Row, Col } from "react-bootstrap";
import { MdPlayCircleOutline } from "react-icons/md";
import * as S from "./course-videos.styled";

const CourseVideos = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12} lg={12}>
          <h3>เนื้อหาของคอร์สนี้</h3>
          <S.PlayListContainer>
            <S.PlayListTitle>บทนำ</S.PlayListTitle>
            <S.VideoSection>
              <S.VideoTitle>แนะนำคอร์สออนไลน์</S.VideoTitle>
              <S.VideoAction>
                <S.PreviewText>ดูตัวอย่าง</S.PreviewText>
                <S.PlayIcon><MdPlayCircleOutline/></S.PlayIcon>
                <S.VideoDuration>01:07</S.VideoDuration>
              </S.VideoAction>
            </S.VideoSection>
          </S.PlayListContainer>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CourseVideos;
