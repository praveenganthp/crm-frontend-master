import React from "react";

import { Form, Row, Col } from "react-bootstrap";
import { FcSearch } from "react-icons/fc";

export const SearchForm = ({ handleOnChange, str }) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="1">
            <FcSearch style={{ fontSize: "35px" }} />
          </Form.Label>
          <Col sm="7">
            <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              value={str}
              placeholder="Search ..."
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
