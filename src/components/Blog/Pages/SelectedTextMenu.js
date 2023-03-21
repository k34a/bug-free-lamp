function handleCopyClick(text, setIsCopied) {
    navigator.clipboard.writeText(text || "")
    document.getSelection().removeAllRanges();
    setIsCopied(true)
    setTimeout(() => {
        setIsCopied(false);
    }, 700);
}

function handleTweetClick(text) {
    const tweetText = encodeURIComponent(text);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, "_blank");
    document.getSelection().removeAllRanges();
} 

const SelectedTextMenu = (props) => {
    return (
        <div
            className="absolute tooltip z-10 bg-black text-white rounded-md shadow-md p-2 flex justify-center items-center space-x-4"
            style={{
                top: props.tooltipPosition.y,
                left: props.tooltipPosition.x,
                transform: "translate(-50%, -100%)",
            }}
        >
            <button
                onClick={() => handleCopyClick(props.selectedText, props.setIsCopied)}
                className='hover:opacity-75 active:opacity-25'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-files" viewBox="0 0 16 16">
                    <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                </svg>
            </button>
            <button
                onClick={() => handleTweetClick(props.selectedText)}
                className='hover:opacity-75 active:opacity-25'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
            </button>
        </div>
    );
};

export default SelectedTextMenu;
