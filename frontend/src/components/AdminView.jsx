import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function AdminView() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/submissions")
      .then((response) => {
        setSubmissions(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the submissions!", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2>User Submissions</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => {
            //this code here hels retreive or return the information from the DB. make sure the name of schema variable are same here!
            return (
              <tr>
                <td>{submission.firstName}</td>
                <td>{submission.lastName}</td>
                <td>{submission.email}</td>
                <td>{submission.phone}</td>
                <td>{submission.message}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AdminView;
