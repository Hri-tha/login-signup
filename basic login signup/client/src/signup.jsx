// signup.jsx
import React, { useState } from "react";
import "./Signup.css"; // Import CSS file for styling
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle signup form submission
  const handleSignup = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register',{email,password})
    .then(result=>{console.log(result)
        navigate('/login')
    })
    .catch(err=> console.log(err))
    // Handle signup logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
        <div className="login-link">
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
      </form>
      
    </div>
    
  );
}

export default Signup;

// import { useState } from "react";
// import './App.css';
// function Signup(){
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     // Function to handle signup form submission
//     const handleSignup = (e) => {
//       e.preventDefault();
//       // Handle signup logic here
//       console.log('Email:', email);
//       console.log('Password:', password);
//     };
  
//     return (
      
//       <div className="container">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </label>
//           <br />
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </label>
//           <br />
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//   );
// }