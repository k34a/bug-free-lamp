export default function TeamMemberCard(props){
    return (
        <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
                <a href="#" className="mx-auto">
                    <img alt="" className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={`/team/${props.name}.jpeg`} />
                </a>

                <div className="text-center mt-6">
                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                        {props.name}
                    </h1>

                    <div className="text-gray-700 font-light mb-2">
                        {props.role}
                    </div>
                    <div className="text-gray-700 text-sm font-light mb-2">
                        {props.bio}
                    </div>

                    <div 
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                    >
                        <a 
                            href={props.linkedin} 
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa fa-linkedin text-indigo-700 mx-auto mt-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}