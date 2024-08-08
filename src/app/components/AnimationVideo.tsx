"use client";

import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const AnimationVideo = () => {
    let videosrc = "/AnimationVideo.mp4";

    return (
        <div className="rounded-lg">
            <ReactPlayer
                url={videosrc}
                controls={true}
                light={false}
                pip={true}
                loading="lazy"
                title="Larry Rowbs Foundation Mission"
                width="100%"
                height="100%"
            >
                <source src={videosrc} type="video/mp4" />
            </ReactPlayer>
        </div>
    );
};

export default AnimationVideo;
