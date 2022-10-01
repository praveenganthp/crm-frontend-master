import React, { useEffect, useState } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/Breadcrumb/Breadcrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { Link } from "react-router-dom";

import { SearchTable } from "./searchtable";

export const TicketLists = () => {
  const [str, setStr] = useState("");
  const [tickets, setData] = useState([]);

  const fetchData = async () => {
    return await fetch("https://crm-app123.herokuapp.com/add-ticket")
      .then((response) => response.json())
      .then((data) => {
        setDispTicket(data);
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [dispTicket, setDispTicket] = useState([]);

  useEffect(() => {}, [dispTicket, str]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (strr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(strr.toLowerCase())
    );

    setDispTicket(displayTickets);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/add-ticket">
            <Button
              style={{
                backgroundColor: "rgb(110 23 146)",
              }}
            >
              Add New Ticket
            </Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>

        <hr />
        <Row>
          <Col>
            <SearchTable tickets={dispTicket} />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
