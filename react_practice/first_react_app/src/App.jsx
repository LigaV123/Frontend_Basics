import { useState } from 'react';
import './App.css'
import Box from './components/box/box'

const boxContent = [':>', ':)'];

const App = () => {
  const [isDay, setIsDay] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [faces, setFaces] = useState(boxContent);
  
  return (
    <>
      <h1 className='heading'>
        {isDay ? 'It is sunny outside' : 'Its not sunny outside'}
      </h1>

      <div className="day-switch__wrapper">
        <button 
          type="button" 
          className={`day-switch__button ${isDay ? '' : 'active'}`}
          onClick={() => {
            setIsDay(false)
          }}
        >
          Set Night
        </button>
        <button 
          type="button" 
          className={`day-switch__button ${!isDay ? '' : 'active'}`}
          onClick={() => {
            setIsDay(true)
          }}
        >
          Set Day
        </button>
      </div>

      <div className='box-wrapper'>
        <div className="box-wrapper__add">
          <form 
            className="box-wrapper__form"
            onSubmit={(e) => {
              e.preventDefault();
              //console.log('submited walue is:', inputValue);
              setFaces([...faces, inputValue])
              setInputValue('')
            }}
          >
            <input 
              type='text' 
              placeholder=':)'
              className="box-wrapper__input"
              value={inputValue}
              onChange={(eventObj) => {
                setInputValue(eventObj.target.value)
              }}
              minLength={2}
              maxLength={5}
              required
            />
            <button className='box-wrapper__button'>
              Add new face
            </button>
          </form>
        </div>

        {faces.map((content, index) => (
          <Box 
          key = {Math.random()}
          isDay = {isDay}
          content = {content}
          onClick={() => {
            const newFaces = faces.filter((_, i) => {
              return i !== index;
            })

            setFaces(newFaces)
          }}
          />
          )
        )}
      </div>
    </>
  )
}

export default App
