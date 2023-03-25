const YoutubeVideo = (props) => {
    return (
        <div className="aspect-w-16 aspect-h-9">
            <iframe 
                src={`https://www.youtube.com/embed/${props.videoId}`}
                title="Larry Rowbs Foundation Mission" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="rounded-lg"
                loading="lazy"
            >
            </iframe>
        </div>
    );
}

export default YoutubeVideo;