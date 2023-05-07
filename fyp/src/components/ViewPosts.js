import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/viewPost.css";
const ViewPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          margin: "3rem",
          fontWeight: "bold",
          color: "#ba2025",
        }}
      >
        Blood Request Posts
      </h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Blood Group</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td>{post.name}</td>
                <td>{post.location}</td>
                <td>{post.bloodType}</td>
                <td>{post.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewPosts;
