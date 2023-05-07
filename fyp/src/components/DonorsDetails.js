import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Form } from "react-bootstrap";

const DonorsDetails = () => {
  const [searchCity, setSearchCity] = useState("");
  const [searchBloodGroup, setSearchBloodGroup] = useState("");
  const [donorsdetails, setDonorsDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/donors")
      .then((response) => response.json())
      .then((data) => {
        setDonorsDetails(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCityChange = (event) => {
    setSearchCity(event.target.value);
  };

  const handleBloodGroupChange = (event) => {
    setSearchBloodGroup(event.target.value);
  };

  const filteredDonorsDetails = donorsdetails.filter((donor) => {
    if (searchCity && searchBloodGroup) {
      return (
        donor.city.toLowerCase().includes(searchCity.toLowerCase()) &&
        donor.bloodGroup.toLowerCase().includes(searchBloodGroup.toLowerCase())
      );
    } else if (searchCity) {
      return donor.city.toLowerCase().includes(searchCity.toLowerCase());
    } else if (searchBloodGroup) {
      return donor.bloodGroup
        .toLowerCase()
        .includes(searchBloodGroup.toLowerCase());
    } else {
      return true; // show all donors if no search term entered
    }
  });

  return (
    <div className="body-bg">
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="srch-h">Search your Donor</Form.Label>
            <Form.Control
              className="srch-br"
              type="text"
              placeholder="Enter city name"
              onChange={handleCityChange}
            />
            <Form.Control
              className="srch-br"
              type="text"
              placeholder="Enter Blood Group"
              onChange={handleBloodGroupChange}
            />
          </Form.Group>
        </Form>
        <Table striped bordered hover>
          <thead className="form-bg">
            <tr className="form-tr">
              <th>Donors Name</th>
              <th>Contact number</th>
              <th>City</th>
              <th>Blood Group</th>
              <th>Last Donation Date</th>
              <th>Paid/Free</th>
            </tr>
          </thead>
          <tbody>
            {filteredDonorsDetails.map((donor, index) => (
              <tr key={index}>
                <td>{donor.name}</td>
                <td>{donor.phone}</td>
                <td>{donor.city}</td>
                <td>{donor.bloodGroup}</td>
                <td>{donor.lastDonation}</td>
                <td>{donor.ispaid=== "Paid" ? "Paid" : "Free"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DonorsDetails;
