import { useState } from "react"

function Button({text, color, size, onClick, disabled}){
  return(
    <button
    onClick={onClick}
    disabled={disabled}
    className={
      `px-6 py-2 rounded-lg font-medium transition-all duration-300
      ${size === 'small' ? 'text-sm px-4 py-1' : '' }
      ${size === 'large' ? 'text-sm px-8 py-3' : '' }
      ${color === 'primary' ? 'bg-blue-500 hover:bg-blue-600 text-white' : ''}
      ${color === 'secondary' ? 'bg-gray-500 hover:bg-gray-600 text-white' : ''}
      ${color === 'danger' ? 'bg-red-500 hover:bg-red-600 text-white' : ''}
      ${color === 'success' ? 'bg-green-500 hover:bg-green-600 text-white' : ''}
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `
    }
    >
      {text}
    </button>
  )
}

function BasicProps() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <section className='p-8 bg-white rounded-xl shadow-2xl'>
      <div className="text-3xl font-medium mb-4 text-gray-800">Basic Pros</div>
      <p className="text-gray-700">
        Props are arguments passes to react components. They allow you to pass data from parent to child components.
      </p>
      <div>
        <div className="text-xl pt-4 font-medium text-gray-700 pb-4">Diffrent Colors</div>
        <div className="flex flex-wrap gap-3">
          <Button text='Primary button' color='primary' onClick={() => setClickCount(clickCount + 1)} />
          <Button text='Secondary button' color='secondary' onClick={() => setClickCount(clickCount + 1)} />
          <Button text='Danger button' color='danger' onClick={() => setClickCount(clickCount + 1)} />
          <Button text='Success button' color='success' onClick={() => setClickCount(clickCount + 1)} />
        </div>
      </div> 
      <div>
        <div className="text-xl pt-4 font-medium text-gray-700 pb-4">Diffrent Sizes</div>
        <div className="flex flex-wrap gap-3">
          <Button text='Small' color='primary' size='small' onClick={() => setClickCount(clickCount + 1)}/>
          <Button text='Medium (Default)' color='primary' onClick={() => setClickCount(clickCount + 1)}/>
          <Button text='Large' color='primary' size='large' onClick={() => setClickCount(clickCount + 1)}/>
        </div>
      </div>
      <div>
        <div className="text-xl pt-4 font-medium text-gray-700 pb-4">Disabled State</div>
        <div className="flex flex-wrap gap-3">
          <Button text='Enabled Button' color='primary' onClick={() => setClickCount(clickCount + 1)}/>
          <Button text='Disabled button' disabled={true} color='primary' onClick={() => setClickCount(clickCount + 1)}/>
        </div>
      </div>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-lg font-medium text-gray-700">
          Click Count :<span className="text-blue-600 font-bold"> {clickCount}</span>
        </p>
      </div>
    </section>
  )
}

export default BasicProps