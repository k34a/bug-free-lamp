import Link from "next/link";

const Page = () => {
    return (
        <div className="flex flex-col h-screen bg-green-50 text-green-900">
            <header className="bg-green-700 text-white p-4 text-center">
                <h1 className="text-3xl font-bold">ReStitch</h1>
                <p>Your sustainability assistant powered by AI</p>
            </header>
            <main className="flex flex-col flex-1 p-4">
                <div className="flex-1 overflow-y-auto mb-4">
                    {/* Messages will be dynamically added here */}
                </div>
                <div className="flex border-t border-green-700 pt-2">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 p-2 border border-green-700 rounded-l focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                    <button className="bg-green-700 text-white p-2 rounded-r hover:bg-green-800">
                        Send
                    </button>
                </div>
            </main>
            <footer className="bg-slate-800 text-white text-center p-2 text-xs">
                <p>
                    By using ReStitch, you agree to our{" "}
                    <Link href="/terms" className="underline">
                        Terms
                    </Link>{" "}
                    and have read our{" "}
                    <Link href="/privacy" className="underline">
                        Privacy Policy
                    </Link>
                    .
                </p>
            </footer>
        </div>
    );
};

export default Page;
