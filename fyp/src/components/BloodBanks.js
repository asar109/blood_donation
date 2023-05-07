import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";

const BloodBanks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bloodBanks, setBloodBanks] = useState([
    {
      name: "Blood Bank 1",
      contactNumber: "123-456-7890",
      email: "bloodbank1@example.com",
      address: "123 Main Street, Lahore",
    },
    {
      name: "Blood Bank 2",
      contactNumber: "234-567-8901",
      email: "bloodbank2@example.com",
      address: "456 Market Street, Rawalpindi",
    },
    {
      name: "Blood Bank 3",
      contactNumber: "345-678-9012",
      email: "bloodbank3@example.com",
      address: "789 5th Avenue, Multan",
    },
    {
      name: "Blood Bank 1",
      contactNumber: "123-456-7890",
      email: "bloodbank1@example.com",
      address: "123 Main Street, Lahore",
    },
    {
      name: "Blood Bank 2",
      contactNumber: "234-567-8901",
      email: "bloodbank2@example.com",
      address: "456 Market Street, Rawalpindi",
    },
    {
      name: "Blood Bank 3",
      contactNumber: "345-678-9012",
      email: "bloodbank3@example.com",
      address: "789 5th Avenue, Multan",
    },
    {
      name: "Blood Bank 1",
      contactNumber: "123-456-7890",
      email: "bloodbank1@example.com",
      address: "123 Main Street, Lahore",
    },
    {
      name: "Blood Bank 2",
      contactNumber: "234-567-8901",
      email: "bloodbank2@example.com",
      address: "456 Market Street, Rawalpindi",
    },
    {
      name: "Blood Bank 3",
      contactNumber: "345-678-9012",
      email: "bloodbank3@example.com",
      address: "789 5th Avenue, Multan",
    },
    {
      name: "Blood Bank 1",
      contactNumber: "123-456-7890",
      email: "bloodbank1@example.com",
      address: "123 Main Street, Lahore",
    },
    {
      name: "Blood Bank 2",
      contactNumber: "234-567-8901",
      email: "bloodbank2@example.com",
      address: "456 Market Street, Rawalpindi",
    },
    {
      name: "Blood Bank 3",
      contactNumber: "345-678-9012",
      email: "bloodbank3@example.com",
      address: "789 5th Avenue, Multan",
    },
    {
      name: "Blood Bank 1",
      contactNumber: "123-456-7890",
      email: "bloodbank1@example.com",
      address: "123 Main Street, Lahore",
    },
    {
      name: "Blood Bank 2",
      contactNumber: "234-567-8901",
      email: "bloodbank2@example.com",
      address: "456 Market Street, Rawalpindi",
    },
    {
      name: "Blood Bank 3",
      contactNumber: "345-678-9012",
      email: "bloodbank3@example.com",
      address: "789 5th Avenue, Multan",
    },
    // Add more blood banks as needed
  ]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBloodBanks = bloodBanks.filter((bloodBank) =>
    bloodBank.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="body-bg">
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="srch-h">Search by City</Form.Label>
            <Form.Control
              className="srch-br"
              type="text"
              placeholder="Enter city name"
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
        <Table striped bordered hover>
          <thead className="form-bg">
            <tr className="form-tr">
              <th>Blood Bank name</th>
              <th>Contact number</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {filteredBloodBanks.map((bloodBank, index) => (
              <tr key={index}>
                <td>{bloodBank.name}</td>
                <td>{bloodBank.contactNumber}</td>
                <td>{bloodBank.email}</td>
                <td>{bloodBank.address}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default BloodBanks;
