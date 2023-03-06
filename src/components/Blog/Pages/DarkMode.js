import useDarkMode from "@/lib/useDarkMode";

const DarkMode = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const toggleTheme = (e) => {
        setTheme((t) => {
            if (e.target.value === "dark") return "light";
            else return "dark";
        })
    }
    return (
        <div className='flex v-screen justify-center items-center pt-12'>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    value={colorTheme}
                    className="sr-only peer"
                    checked={colorTheme === "dark"}
                    onClick={toggleTheme}
                    onChange={(e) => { }}
                />
                <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                <p>&nbsp;&nbsp;Dark Mode</p>
            </label>
        </div>
    );
}

export default DarkMode;