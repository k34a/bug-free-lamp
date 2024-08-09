"use client";

import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface AnimationVideoProps {
    src: string;
}

const AnimationVideo = (props: AnimationVideoProps) => {
    return (
        <div className="rounded-lg">
            <ReactPlayer
                url={props.src}
                controls={true}
                light={false}
                pip={true}
                loading="lazy"
                title="Larry Rowbs Foundation Mission"
                width="100%"
                height="100%"
            >
                <source src={props.src} type="video/mp4" />
            </ReactPlayer>
        </div>
    );
};

export default AnimationVideo;
