import React from 'react'
import Header from './Header'
import Form from './Form'
import './App.css';

const App = () => {
  return (
    <div className="container hello">
      <Header/>
      <h2 class="register-heading">Data Registeration Form</h2>
      <Form/><br></br><br></br><br></br>
    </div>
  )
}

export default App
