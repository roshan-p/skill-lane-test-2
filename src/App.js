import React from "react";
import "./App.css";
import SearchField from "../src/components/search-field/search-field";
import Banner from "../src/components/banner/banner";
import CourseContent from "../src/components/course-content/course-content"
import ContentTab from "../src/components/content-tabs/content-tabs"

import { Nav, Navbar } from "react-bootstrap";
function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="xl" bg="white" variant="light">
        <botton
          onClick={() => {
            console.log(1233);
          }}
          class="more-type"
        >
          หมวดหมู่
        </botton>
        <Navbar.Brand href="/">
          <img
            class="navbar-logo"
            src="https://s3-ap-southeast-1.amazonaws.com/skilllane/images/Logo/logo.png"
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="custom-navbar" id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/bloglist">คอร์สเรียนทั้งหมด</Nav.Link>
            <Nav.Link href="/addblog">TUXSA</Nav.Link>
            <Nav.Link href="/addblog">สำหรับองค์กร</Nav.Link>
            <Nav.Link href="/addblog">สอนกับเรา</Nav.Link>
            <div class="split-line"></div>
            <Nav.Link href="/addblog">เข้าสู่ระบบ</Nav.Link>
            <Nav.Link href="/addblog">สมัครสมาชิก</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <SearchField />
      </Navbar>
      <Banner></Banner>
      <CourseContent></CourseContent>
      <ContentTab></ContentTab>
      {/* <Main /> */}
    </div>
  );
}

export default App;
