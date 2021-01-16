import React from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NAVLIST, SIGNIN } from "../constants/Common";
import { SearchBox } from "./SearchBox";
import "./Header.css";
import { useRefreshToken } from "../hooks/CustomHook";

export const Header = () => {
  const isLogin = useSelector((state) => state?.User?.isLogin);
  const account = useSelector((state) => state?.User?.account);
  const navList = NAVLIST.map((item, index) => (
    <Nav.Link key={index} href={item.path}>
      {item.label}
    </Nav.Link>
  ));
  useRefreshToken();
  return (
    <>
      <Navbar expand="md" className="header-wrap" fixed="top">
        <Container>
          <Row className="full-width">
            <Col xs="10" lg="10">
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav className="mr-auto">{navList}</Nav>
                <SearchBox />
              </Navbar.Collapse>
            </Col>
            <Col xs="2" lg="2">
              {isLogin && <div className="header-user-state">{account}</div>}
              {!isLogin && (
                <Nav.Link href="/signin" className="header-user-state">
                  {SIGNIN}
                </Nav.Link>
              )}
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};
