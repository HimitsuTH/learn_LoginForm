import React from 'react'
import Login from './pages/Login';
import { FormData } from './pages/Login';


function App() {
  function handleSubmit(formData: FormData) {
    console.log(formData);
  }

  return (
    <div className=' h-screen grid place-items-center'>
      <Login onSubmit={handleSubmit} />
    </div>
  );
}

export default App;