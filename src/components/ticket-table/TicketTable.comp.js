import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Tickettable = ({ tickets }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Message</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>
                <Link to={`/ticket/${row._id}`}> {row.subject}</Link>
              </td>

              <td>{row.message}</td>
              <td>{row.issueDate}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No tickets
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
