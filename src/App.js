import React from "react";
import "./App.css";

import { Container, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Entry } from "./page/entry/Entry.page";

import { Dashboard } from "./page/dashboard/Dashboard.page";
import { AddTicket } from "./page/new-ticket/AddTicket.page";
import { TicketLists } from "./page/ticket-list/TicketLists.page";
import { Ticket } from "./page/ticket/Ticket.page";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";
import { ErrorPage } from "./error";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
          <Route exact path="/error">
            <ErrorPage />
          </Route>

          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/add-ticket">
            <AddTicket />
          </PrivateRoute>
          <PrivateRoute exact path="/ticket/:tId">
            <Ticket />
          </PrivateRoute>
          <PrivateRoute exact path="/tickets">
            <TicketLists />
          </PrivateRoute>

          <PrivateRoute path="*">
            <Container>
              <Modal.Dialog>
                <Modal.Header>
                  <Modal.Title>
                    <h4>Ticket closed successfully!.</h4>
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <p>
                    <h6>Thank you for closing the ticket!!</h6>
                  </p>
                </Modal.Body>

                <Modal.Footer>
                  <Link to="/dashboard">
                    <Button variant="primary">Exit</Button>
                  </Link>
                </Modal.Footer>
              </Modal.Dialog>
            </Container>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
