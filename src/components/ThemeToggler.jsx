import {createContext, useContext, useState} from 'react'

//this is the themee context where the all the context data will be there
const ThemeContext = createContext();

//now thi is a Theme Provide Componenet

export function ThemeProvider({children}){

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => { 
    setTheme((prevTheme) => (prevTheme === 'light' ?'dark' :'light'))
  }
  const value = {
    theme, 
    toggleTheme,
    isDark : theme == 'dark'
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

//custome hooks to create a theme
export function UseTheme(){
  const context = useContext(ThemeContext);

  if(!context){
    throw new Error('useTheme must be used within theme provider');
  }

  return context;
}

function ThemeToggler() {
  const { theme, toggleTheme, isDark } = UseTheme();

  const bgColor = isDark ? 'bg-gray-900' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-gray-800';
  const subTextColor = isDark ? 'text-gray-300' : 'text-gray-700';
  const buttonPrimary = isDark ? 'bg-orange-500 text-white' : 'bg-orange-400 text-white';
  const buttonSecondary = isDark ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-800';
  const statusColor = isDark ? 'text-green-400' : 'text-green-600';

  return (
    <div className={`${bgColor} min-w-xl min-h-xl rounded-xl p-6 transition-all duration-300`}>
      {/* Header Section */}
      <div className="mb-4 flex flex-row justify-baseline">
        <div className='flex flex-col'>
          <div className={`${textColor} font-bold text-2xl`}>Theme Toggler</div>
        <div className={`${subTextColor} mb-2`}>
          This section demonstrates theme toggling using Context API and props. The theme state is shared across all child components without prop drilling.
        </div>
        </div>
        
        <button
          onClick={toggleTheme}
          className={`text-base focus:outline-none rounded-[20%] ml-5 ${isDark ? 'bg-white text-black' : 'bg-gray-800 text-white '}`}
          aria-label="Toggle Theme"
        >
          {isDark ? "🌛 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      {/* User Information Section */}
      <div className="mb-6">
        <div className={`${textColor} font-semibold`}>Name: John Doe</div>
        <div className={`${subTextColor}`}>Email: john@example.com</div>
        <div className={`${subTextColor} mb-2`}>Role: Developer</div>
        <div className="flex gap-2">
          <button className={`px-4 py-2 rounded ${buttonPrimary}`}>Edit Profile</button>
          <button className={`px-4 py-2 rounded ${buttonSecondary}`}>Settings</button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mb-6">
        <div className={`${textColor}`}>Total Clicks: 0</div>
        <div className={`${textColor}`}>Theme: {theme}</div>
        <div className={`${statusColor}`}>Status: Active</div>
      </div>

      {/* Interactive Demo Section */}
      <div className="mb-6">
        <div className={`${subTextColor} mb-2`}>
          Try clicking the buttons below to see how they adapt to the current theme:
        </div>
        <div className="flex gap-2">
          <button className={`px-4 py-2 rounded ${buttonPrimary}`}>Primary Action</button>
          <button className={`px-4 py-2 rounded ${buttonSecondary}`}>Secondary Action</button>
          <button className={`px-4 py-2 rounded ${buttonPrimary}`}>Reset Counter</button>
        </div>
      </div>

      {/* Footer Section */}
      <div className={`${subTextColor} mt-4`}>
        <div className="font-semibold">Why Context + Props?</div>
        <p>
          Context API allows global state sharing without prop drilling. Props help customize components while keeping them reusable.
        </p>
      </div>
    </div>
  );
}

export default ThemeToggler;