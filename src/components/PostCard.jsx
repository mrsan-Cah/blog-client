import React from 'react';

const PostCard = ({ post }) => (
  <div className="card">
    <h2>{post.title}</h2>
    <p>{post.content}</p>
    <small>{new Date(post.createdAt).toLocaleString()}</small>
  </div>
);

export default PostCard;
