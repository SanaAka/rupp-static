import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial theme
    setIsDarkMode(mediaQuery.matches);
    document.documentElement.classList.toggle('dark', mediaQuery.matches);

    // Create event listener function
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
      document.documentElement.classList.toggle('dark', e.matches);
    };

    // Add event listener
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup function to remove event listener
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <div className=" items-start w-[0rem] left-[90%] relative ">
      <div className="relative group">
        <button
          onClick={toggleTheme}
          className="relative flex items-center justify-center top-5 w-12 h-12  rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <Sun size={20} className="transition-transform duration-300 group-hover:rotate-12" />
          ) : (
            <Moon size={20} className="transition-transform duration-300 group-hover:-rotate-12" />
          )}
        </button>

        <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 top-full  mt-5">
          <div className="relative">
            <div className="absolute left-3 -top-0 w-2 h-2 bg-gray-900 transform rotate-45" />
            <div className="relative px-3 right-32 py-2 rounded bg-gray-800 text-white text-sm whitespace-nowrap">
              {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;