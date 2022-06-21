import React from "react";
import CoffeeCard from "./CoffeeCard";

function Home({ videos }) {
    const postVideos = videos.map((video) => (
        <CoffeeCard 
        key={video.id}
        id={video.id}
        channel={video.channel}
        description={video.description}
        likeCount={video.likeCount}
        liked={video.liked}
        link={video.link}
        title={video.title}
        video={video}
        />
    
    ))
    return <div>{postVideos}</div>;
}

export default Home;