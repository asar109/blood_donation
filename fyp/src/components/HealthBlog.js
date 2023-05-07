import React, { useState, useEffect } from "react";

function HealthBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blogs, setBlogs] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddBlog = () => {
    const newBlog = { title, description };
    fetch("http://localhost:4000/api/v1/blog/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((response) => response.json())
      .then((data) => {
        setBlogs([...blogs, data]);
        setTitle("");
        setDescription("");
        fetchLatestPosts(); // fetch the latest posts after adding a new one
      })
      .catch((error) => console.log(error));
  };

  const fetchLatestPosts = () => {
    fetch("http://localhost:4000/api/v1/blog/posts")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchLatestPosts(); // fetch the latest posts when the component mounts
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-title">Health Blog</h2>
      <form>
        <div className="blog-form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="blog-form-control"
          />
        </div>
        <div className="blog-form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="blog-form-control"
          ></textarea>
        </div>
        <button type="button" onClick={handleAddBlog} className="blog-btn">
          Add Blog
        </button>
      </form>
      <div className="blog-list">
        <h3 className="blog-list-title">Latest Posts</h3>
        <ul>
          {blogs.map((blog) => (
            <li key={blog._id} className="blog-list-item">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HealthBlog;
