import React, { useState } from "react";
import { Row, Col, Container, Nav } from "react-bootstrap";
import * as S from "./content-tabs.styled";
import CourseDetailTab from "../course-detail-tab/course-detail-tab"
import InstructorDetail  from "../instructor-detail/instructor-detail";
const ContentTab = () => {
  const [activateTab, setActivateTab] = useState(0);
  return (
    <Container>
      <Row>
        <Col xs={12} lg={9}>
          <S.CustomNav>
            <Nav.Item>
              <S.CustomNavLink
                activateTab={activateTab === 0 ? true : false}
                onClick={() => {
                  setActivateTab(0);
                }}
              >
                รายละเอียด
              </S.CustomNavLink>
            </Nav.Item>
            <Nav.Item>
              <S.CustomNavLink
                activateTab={activateTab === 1 ? true : false}
                onClick={() => {
                  setActivateTab(1);
                }}
              >
                รายละเอียด
              </S.CustomNavLink>
            </Nav.Item>
            <Nav.Item>
              <S.CustomNavLink
                activateTab={activateTab === 2 ? true : false}
                onClick={() => {
                  setActivateTab(2);
                }}
              >
                รายละเอียด
              </S.CustomNavLink>
            </Nav.Item>
            <Nav.Item>
              <S.CustomNavLink
                activateTab={activateTab === 3 ? true : false}
                onClick={() => {
                  setActivateTab(3);
                }}
              >
                รายละเอียด
              </S.CustomNavLink>
            </Nav.Item>
          </S.CustomNav>
          {activateTab===0&&<CourseDetailTab/>}
        </Col>
        <InstructorDetail/>
     
      </Row>
    
    </Container>
  );
};

export default ContentTab;
