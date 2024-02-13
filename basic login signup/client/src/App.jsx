
// App.jsx
// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter , Routes, Route,BrowserRouter } from 'react-router-dom';
// import Signup from './signup';

// function App() {
//   return (
    
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Signup />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Remove the duplicate import

import Signup from './signup';
import Login from './login';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//export default App;

// import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'

// function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // Function to handle signup form submission
//   const handleSignup = (e) => {
//     e.preventDefault();
//     // Handle signup logic here
//     console.log('Email:', email);
//     console.log('Password:', password);
// };
//     return(
//         <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignup}>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//     );
// }

// export default App
