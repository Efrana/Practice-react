import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Login from './components/Login'
import Counter from './components/Counter'
import DynamicField from './components/DynamicField'
import Welcome from './components/Welcome'
import DataFetching from './components/DataFetching'
import Message from './components/Message'
import Datafetchclass from './components/Datafetchclass'
import DestructProps from './components/DestructProps'
import FormValidation from './components/FormValidation'
import Wizard from './components/Wizard'

function App() {
  return (
    <div className="App">
      {/* <Greet name="Diana" heroname="wonder woman" />
      <Greet name="Bruce" heroname="Batman" />
      <Greet name="Clark" heroname="Superman" />
      <Welcome name="Flash" heroname="Flash" />
      <Message />
      <DestructProps name="Stark" heroname="Ironman"/> */}
      {/* <DataFetching /> */}
      {/* <Datafetchclass/> */}
      {/* <Login/> */}
      {/* <Counter/> */}
      {/* <DynamicField /> */}
      <FormValidation/>
      {/* <Wizard/> */}
    
      
    </div>
  );
}

export default App;
