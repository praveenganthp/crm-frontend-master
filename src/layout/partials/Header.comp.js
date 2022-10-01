import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";

import { RiShutDownLine } from "react-icons/ri";
import { BsListUl } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";

export const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      style={{
        backgroundColor: "rgb(110 23 146)",
      }}
      variant="dark"
      expand="md"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml">
          &nbsp; &nbsp;
          <Link
            to="/dashboard"
            style={{
              textDecorationLine: "none",
            }}
          >
            <div>
              <AiOutlineDashboard
                style={{
                  color: "white",
                  fontSize: "30px",
                }}
                className="dashboardbtn"
              />
              <p
                style={{
                  color: "white",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Dashboard
              </p>
            </div>
          </Link>
          &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
          <Link
            to="/tickets"
            style={{
              textDecorationLine: "none",
            }}
          >
            <div>
              <BsListUl
                className="dashboardbtn"
                style={{
                  color: "white",
                  fontSize: "30px",
                }}
              />
              <p
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Ticket List
              </p>
            </div>
          </Link>
          &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
          <Link
            to="/"
            style={{
              textDecorationLine: "none",
            }}
          >
            <div>
              <RiShutDownLine
                className="dashboardbtn"
                style={{
                  color: "white",

                  fontSize: "30px",
                }}
              />
              <p
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                LogOut
              </p>
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
