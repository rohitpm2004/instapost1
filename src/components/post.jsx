import React, { useState } from 'react';

const Post = (props) => {
  const [likes, setLikes] = useState(0);

  const handleLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post-card">
      <img src={props.image} alt={props.name} className="post-image" />
      <p className="post-author">{props.name}</p>
      <button className="like-btn" onClick={handleLikes}>
        likes {likes}
      </button>
    </div>
  );
};

export default Post;
