import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/Breadcrumb/Breadcrumb.comp";

import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";
import { useParams, useHistory } from "react-router-dom";
import { ticketContext } from "./context.page";
export const Ticket = () => {
  const { tId } = useParams();
  const [ticket, setData] = useState([]);

  const fetchData = async () => {
    return await fetch(`https://crm-app123.herokuapp.com/add-ticket/${tId}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  });

  let history = useHistory();
  const handleClick = () => {
    history.push("./");
  };

  localStorage.setItem("tId", tId);

  useEffect(() => {
    for (let i = 0; i < ticket.length; i++) {
      if (ticket[i].id === tId) {
        setData(ticket[i]);
        continue;
      }
    }
  }, [ticket, tId]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>

      <Row>
        <Col></Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject: {ticket.subject} </div>
          <div className="date">Ticket Open: {ticket.issueDate}</div>
          <div className="status">Message: {ticket.message} </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
      </Row>
      <hr />
      <ticketContext.Provider value={{ handleClick }}>
        <Row className="mt-4">
          <Col>
            <UpdateTicket handleClick={handleClick} />
          </Col>
        </Row>
      </ticketContext.Provider>
    </Container>
  );
};
