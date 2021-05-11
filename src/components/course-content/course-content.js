import React from "react";
import * as S from "./course-content.styled";
import { Row, Col } from "react-bootstrap";

const CourseContent = () => {
  return (
    <S.CourseContainer>
      <Row>
        <S.VideoContainer xs={12} md={12} lg={12} xl={6}>
          <img
            src="https://dummyimage.com/600x400/000/fff&text=IMAGE"
            alt="Girl in a jacket"
            width="100%"
            height="100%"
          />
        </S.VideoContainer>
        <S.CoursePrice xs={12} md={6} lg={6} xl={3}>
          <S.CoursePriceDetailRow>
            <S.BorderLine></S.BorderLine>
            <S.PurhcasePrice>
              <S.Price>1,500 บาท</S.Price>
            </S.PurhcasePrice>
            <S.AuditButton>ชำระเงินเรียนไม่เก็บหน่วยกิต</S.AuditButton>
            <Row>
              <Col xs={12} md={6} lg={12}>
                <S.CheckIcon />
                <S.CourseItem>
                  สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ
                </S.CourseItem>
              </Col>
              <Col xs={12} md={6} lg={12}>
                <S.CheckIcon />
                <S.CourseItem>
                  เนื้อหาทั้งหมด 40 วิดีโอ ความยาวรวมกัน 7 ชั่วโมง 46 นาที
                </S.CourseItem>
              </Col>
              <Col xs={12} md={6} lg={12}>
                <S.CheckIcon />
                <S.CourseItem>เอกสารประกอบ</S.CourseItem>
              </Col>
              <Col xs={12} md={6} lg={12}>
                <S.CrossIcon />
                <S.CourseItem>แบบทดสอบทั้งหมด 4 แบบทดสอบ</S.CourseItem>
              </Col>
              <Col xs={12} md={6} lg={12}>
                <S.CrossIcon />
                <S.CourseItem>ข้อสอบทั้งหมด 1 ข้อสอบ</S.CourseItem>
              </Col>
              <Col xs={12} md={6} lg={12}>
                <S.CrossIcon />
                <S.CourseItem>เก็บหน่วยกิตเรียนปริญญาโท</S.CourseItem>
              </Col>
              <Col xs={12} md={6} lg={12}>
                <S.CrossIcon />
                <S.CourseItem>ประกาศนียบัตร</S.CourseItem>
              </Col>
            </Row>
          </S.CoursePriceDetailRow>
        </S.CoursePrice>
        <S.CourseDetail xs={12} md={6} lg={6} xl={3}>
          <S.CoursePriceDetailRow>
          <S.GrrenBorderLine></S.GrrenBorderLine>
            <S.PurhcasePrice>
              <S.Price>4,500 บาท</S.Price>
            </S.PurhcasePrice>
            <S.PruchaseButton>
            ชำระเงินเรียนไม่เก็บหน่วยกิต
            </S.PruchaseButton>
            <Row>
              <Col xs={12} md={6} lg={12}>
                <S.CheckIcon />
                <S.CourseItem>
                  สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ
                </S.CourseItem>
              </Col>
              <Col xs={12} md={6} lg={12}>
                <S.CheckIcon />
                <S.CourseItem>
                  เนื้อหาทั้งหมด 40 วิดีโอ ความยาวรวมกัน 7 ชั่วโมง 46 นาที
                </S.CourseItem>
              </Col>
              <Col xs={12} md={6} lg={12}>
                <S.CheckIcon />
                <S.CourseItem>เอกสารประกอบ</S.CourseItem>
              </Col>
              <Col xs={12} md={6} lg={12}>
                <S.CheckIcon />
                <S.CourseItem>แบบทดสอบทั้งหมด 4 แบบทดสอบ</S.CourseItem>
              </Col>
              <Col xs={12} md={6} lg={12}>
                <S.CheckIcon />
                <S.CourseItem>ข้อสอบทั้งหมด 1 ข้อสอบ</S.CourseItem>
              </Col>
              <Col xs={12} md={6} lg={12}>
                <S.CheckIcon />
                <S.CourseItem>เก็บหน่วยกิตเรียนปริญญาโท</S.CourseItem>
              </Col>
              <Col xs={12} md={6} lg={12}>
                <S.CheckIcon />
                <S.CourseItem>ประกาศนียบัตร</S.CourseItem>
              </Col>
            </Row>
          </S.CoursePriceDetailRow>
        </S.CourseDetail>
      </Row>
    </S.CourseContainer>
  );
};

export default CourseContent;
