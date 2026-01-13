import {useRef, forwardRef} from 'react'

//first part is to create a forward ref which is for accepting the ref
//second part is to take the reference 
//here we are going to design input component that accept a ref props

const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
});//this forward ref is just a function and inside you can pass another function

CustomInput.displayName = 'CustomInput';

function RefProps() {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => firstInputRef.current?.focus();
  const getInputValue = () => alert(`Current value: ${firstInputRef.current?.value}`);
  const clearValue = () => {
    if (firstInputRef.current) {
      firstInputRef.current.value = '';
      firstInputRef.current.focus();
    }
  };

  const focusSecondInput = () => secondInputRef.current?.focus();
  const getSecondInputValue = () => alert(`Current value: ${secondInputRef.current?.value}`);
  const clearSecondValue = () => {
    if (secondInputRef.current) {
      secondInputRef.current.value = '';
      secondInputRef.current.focus();
    }
  };

  return (
    <section className="p-8 bg-white rounded-xl shadow-lg max-w mx-auto">
      <h2 className="text-2xl font-bold mb-2">Ref Props</h2>
      <p className="mb-6 text-gray-600">
        Refs provide a way to access DOM nodes or React elements directly. Use forwardRef to pass refs to child components.
      </p>

      <h3 className="text-xl font-semibold mb-4">Try it out:</h3>
      <CustomInput ref={firstInputRef} label="First Input (with ref)" placeholder="Type something..." />
      <CustomInput ref={secondInputRef} label="Second Input (with ref)" placeholder="Type something else..." />

      <div className="flex flex-wrap gap-3 mt-4">
        <button onClick={focusInput} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Focus First Input</button>
        <button onClick={getInputValue} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Get First Input Value</button>
        <button onClick={clearValue} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Clear First Input</button>
        <button onClick={focusSecondInput} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Focus Second Input</button>
        <button onClick={getSecondInputValue} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Get Second Input Value</button>
        <button onClick={clearSecondValue} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Clear Second Input</button>
      </div>

      <div className="mt-8 bg-yellow-100 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">When to use refs:</h4>
        <ul className="list-disc list-inside text-gray-700">
          <li>Managing focus, text selection, or media playback</li>
          <li>Triggering imperative animations</li>
          <li>Integrating with third-party DOM libraries</li>
          <li>Accessing DOM measurements (scroll position, element size)</li>
        </ul>
      </div>
    </section>
  );
}

export default RefProps;