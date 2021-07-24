
import './App.css';
import { useState } from 'react';

function App() {
  const[name, setName]=useState("")
  const[email, setEmail]=useState("")
  console.log(name)
  console.log(email)

  return (
    <div className="App">
      <header className="App-header">
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">name</label>
  <input value={name} onChange={(e)=>{setName(e.target.value)}} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name"/>
</div>
<button type="button" className="btn btn-primary">Primary</button>
      </header>
    </div>
  );
}

export default App;
