import React, { useState } from "react";
import axios from "axios";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://blog-server-ak2s.onrender.com/api/posts", {
        title,
        content,
      });
      console.log("Post Saved:", response.data);
      setTitle("");
      setContent("");
      alert("Post created successfully!");
    } catch (err) {
      console.error("Error posting blog:", err);
      alert("Error saving post.");
    }
  };

  return (
    <div className="add-post-container">
      <h2>Create New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="6"
          required
        ></textarea>
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default AddPost;
