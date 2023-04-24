import react from 'react';
import './App.css';
import Text from './Text'

function App() {
  let nombre ="Reactssssssssssss"
  return (<>
  <Text name={nombre}>
  <h1>hola {nombre}</h1>
  </Text>
  </>)
}

export default App;
