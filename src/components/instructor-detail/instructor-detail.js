import React from "react";
import { Col } from "react-bootstrap";
import { MdStar, MdPlayCircleFilled } from "react-icons/md";
import { IoChatbubbleSharp, IoStarSharp } from "react-icons/io5";
import * as S from "./instructor-detail.styled";

const InstructorDetail = () => {
  return (
    <Col xs={12} lg={3}>
      <S.InstructorDetailCard>
        <S.InstructorTitle>ผู้สอน</S.InstructorTitle>
        <S.InstructorCardHeader>
          <S.InstructorImageContainer>
            <S.InstructorImage
              alt="เมษ์ ศรีพัฒนาสกุล"
              src="https://resource.skilllane.com/users/images/001/162/361/ms/Untitled.png?1566569677"
            />
          </S.InstructorImageContainer>
          <S.InstructorProfile>
            <S.InstructorName>เมษ์ ศรีพัฒนาสกุล</S.InstructorName>
            <S.InstructorProfileRating>
              <S.InstructorProfileRatingDetail>
                <IoStarSharp /> 4.7 คะแนนเฉลี่ย
              </S.InstructorProfileRatingDetail>
              <S.InstructorProfileRatingDetail>
                <IoChatbubbleSharp /> 615 รีวิว
              </S.InstructorProfileRatingDetail>
              <S.InstructorProfileRatingDetail>
                <MdPlayCircleFilled /> 1 คอร์ส
              </S.InstructorProfileRatingDetail>
            </S.InstructorProfileRating>
          </S.InstructorProfile>
        </S.InstructorCardHeader>
        <S.InstructorCardContentDetail>
          <S.InstructorCardUl>
            <S.InstructorCardLI>
              กรรมการผู้จัดการและผู้ร่วมก่อตั้ง Asian Leadership Academy /
              LUKKID
            </S.InstructorCardLI>
            <S.InstructorCardLI>
              ที่ปรึกษาเรื่องการคิดเชิงออกแบบ (Design Thinking)
              ให้กับบริษัทชั้นนำของประเทศไทย
            </S.InstructorCardLI>
            <S.InstructorCardLI>
              หัวหน้าทีมคิดเชิงออกแบบที่ Hasso Plattner Institute of Design ที่
              Stanford (d.school)
            </S.InstructorCardLI>
            <S.InstructorCardLI>
              จบการศึกษาปริญญาโทสาขา MBA จาก Stanford Graduate School of
              Business
            </S.InstructorCardLI>
            <S.InstructorCardLI>
              จบการศึกษาปริญญาตรีสาขา Bioengineering จาก University of
              Pennsylvania
            </S.InstructorCardLI>
          </S.InstructorCardUl>
        </S.InstructorCardContentDetail>
      </S.InstructorDetailCard>
    </Col>
  );
};

export default InstructorDetail;
