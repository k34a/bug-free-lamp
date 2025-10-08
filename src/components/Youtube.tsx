import React from 'react'

interface YoutubeProps {
    videoId: string
    title?: string
}

const YoutubeVideo = (props: YoutubeProps) => {
    return (
        <div className="aspect-video">
            <iframe
                src={`https://www.youtube.com/embed/${props.videoId}`}
                title={props.title ?? 'Larry Rowbs Foundation Mission'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-lg"
                loading="lazy"
            ></iframe>
        </div>
    )
}

export default YoutubeVideo
