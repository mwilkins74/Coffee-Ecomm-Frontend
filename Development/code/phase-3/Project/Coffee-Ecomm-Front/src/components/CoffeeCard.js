import React from "react";

function CoffeeCard({ id, liked, likeCount, link, title, video, onVideoLike }) {
    return (
      <div className="card">
        <h6>{title}</h6>
        <div>{link}</div>
        <div>{video}</div>
      </div>
    );
}

export default CoffeeCard;