import React from "react";

function CoffeeCard({ id, liked, likeCount, link, title, video, onVideoLike }) {
    return (
      <div className="card">
          <h6>{title}</h6>
        <iframe
          width="240"
          height="135"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          controls="0"
          modestbranding="1"
          loading="eager"
        />
    </div>
  )
}

export default CoffeeCard;