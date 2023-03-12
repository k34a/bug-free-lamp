export default function TextileWasteCarousel(props){
    return(
        <div className="relative">
            <div
                className="p-12 text-left relative overflow-hidden bg-no-repeat bg-cover bg-left"
                style={{
                    backgroundImage: "url('/fast-fashion-clothes-hanging.jpg')",
                    height: "600px"
                }}>
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}
                >
                    <div className="flex justify-center items-center h-full w-11/12 m-auto">
                        <div className="py-3 px-7 border-gray-200 border-2">
                            <h2 className="text-white font-semibold text-4xl mb-4 underline underline-offset-8">Trashion</h2>
                            <p className="text-slate-300 mb-6"><i>/&apos;traʃn/</i></p>
                            <p className="text-white">noun</p>
                            <ul className="text-slate-300 list-decimal list-inside font-regular text-base mb-6">
                                <li>Trashion refers to clothing or fashion items made from trash or recycled materials.</li>
                                <li>An art of transforming trash into fashionable products</li>
                            </ul>
                            <div className="inline-block p-2 mb-1 bg-white text-purple-500 font-bold rounded-full animate-bounce">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

