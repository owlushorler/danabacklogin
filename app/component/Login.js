"use client"

import Link from 'next/link';
import { useState } from 'react';  

const HRLogin = () => {  
    const [username, setUsername] = useState('');  
    const [password, setPassword] = useState('');  
    const [isAuthenticated, setIsAuthenticated] = useState(false);  

    const handleLogin = (e) => {  
        e.preventDefault();  

        // Check username and password  
        if (username === 'Admin' && password === 'Admin') {  
            // Redirect to the home page if login is successful  
            setIsAuthenticated(true); 
          
        } else {  
            alert('Invalid credentials! Please try again.');  
        }  
    };




  return (  <div>
        <div className='bg-gray-300 text-center py-9' >

        LOGO

        

        </div>
    <div className="bg-gray-300 min-h-screen flex items-center justify-center"> {/* Light gray background, full viewport height */}  
      
      <div className="bg-white p-8 rounded shadow-md w-screen mx-36"> {/* White box with shadow */}  
        <div className="bg-blue-900 text-white p-4 rounded-t-lg"> {/* Blue header */}  
          <h2 className="text-1xl font-bold">HR Career Portal</h2>  
        </div>  
        <form onSubmit={handleLogin}  className="p-4"> {/* Form with padding */}  
          <div className="mb-4">  
            <label htmlFor="email" className="block  text-gray-700 font-bold mb-2">  
              Enter your email  
            </label>  
            <input  
              type="text"  
               
              value={username}
              placeholder='your username'  
              onChange={(e) => setUsername(e.target.value)}  
              className="w-72 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"  
              required  
            />  
          </div>  
          <div className="mb-4">  
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">  
              Password  
            </label>  
            <input  
              type="password"  
              id="password"  
              value={password}
              placeholder='password'  
              onChange={(e) => setPassword(e.target.value)}  
              className="w-72 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"  
              required  
            />  
          </div>  
          <div className="mb-4">  
             {!isAuthenticated &&  <button type="submit" 
               
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  
            >  
              Log In  
            </button>  }
            
          </div>  
        </form> 

         {isAuthenticated && (  
                <p className='text-center' >  
                    Login successful! <br/> <span className='bg-red-700 p-1 m-2' > <Link href="/backend">click to enter the Admin page</Link>. </span> 
                </p>  
            )}   
      </div>  
    </div>  
    </div>
  );  
};  

export default HRLogin;