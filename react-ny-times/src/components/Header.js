import React from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { NAV_LIST, SIGN_IN_LABEL } from "../constants/Common";
import { SearchBox } from "./SearchBox";
import "./Header.css";
import { useRefreshToken } from "../hooks/CustomHook";

export const Header = () => {
  const isLogin = useSelector((state) => state?.User?.isLogin);
  const account = useSelector((state) => state?.User?.account);
  const navList = NAV_LIST.map((item, index) => (
    <NavLink key={index} exact={true} to={item.path} className="nav-link">
      {item.label}
    </NavLink>
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
                <Nav.Link href="/signIn" className="header-user-state">
                  {SIGN_IN_LABEL}
                </Nav.Link>
              )}
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};
