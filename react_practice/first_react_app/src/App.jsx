import './App.css'
import Box from './components/box/box'

const App = () => {
  const isDay = false;
  const boxContent = [':>', ':)', ':D', ';)', ':]'];

  return (
    <>
      <h1 className='heading'>
        {isDay ? 'It is sunny outside' : 'Its not sunny outside'}
      </h1>

      <div className='box-wrapper'>
          {boxContent.map((content) => (
            <Box 
            key = {Math.random()}
            isDay = {isDay}
            content = {content}
            />
          )
        )}
      </div>

      
    </>
  )
}

export default App
