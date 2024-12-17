import React, { useState , useNavigate } from 'react'

const Register=() =>{

  const [formData,setFormData] = useState({

    name : '',
    contact : '',
    email : '',
    password : ''

  });

  const handleChange = (e) => {

    setFormData({...formData,[e.target.name] :e.target.value})
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
    alert('signup successful');

  }
  catch (error) {
    console.error('Signup error:', error);
    alert('Signup failed. Please try again.');
  }
};

  return( 
    
    <div class="w-96 p-10 border border-gray-700 rounded-lg  shadow-lg">
      <h2 class="text-2xl font-bold text-center text-black mb-6">Register</h2>
      <form onSubmit={handleSubmit} class="flex flex-col space-y-4">
        <div class="form-group flex items-center">
          <label class="w-32 text-sm font-medium text-black text-left">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            class="w-full px-3 py-2 border-2 border-gray-700 rounded-md text-sm  text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div class="form-group flex items-center">
          <label class="w-32 text-sm font-medium text-black text-left">Contact:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            placeholder="Enter your Contact number"
            class="w-full px-3 py-2 border-2 border-gray-700 rounded-md text-sm  text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div class="form-group flex items-center">
          <label class="w-32 text-sm font-medium text-black text-left">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            class="w-full px-3 py-2 border-2 border-gray-700 rounded-md text-sm  text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div class="form-group flex items-center">
          <label class="w-32 text-sm font-medium text-black text-left">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your Password"
            class="w-full px-3 py-2 border-2 border-gray-700 rounded-md text-sm  text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <button 
          type="submit" 
          class="w-full py-2 text-sm  text-white font-bold bg-blue-700 rounded-md hover:bg-green-500 transition duration-200 focus:outline-none">
          Signup
        </button>
      </form>
    </div>
  
  

  
   
  )
  
};

export default Register;
