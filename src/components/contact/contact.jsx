import React from 'react';

function Contact() {
  return (
    <div className="bg-gray-100 p-6 rounded shadow-md max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Me</h2>
      
      <p className="text-lg mb-2">
        <span className="font-semibold">Phone:</span> 7430933585
      </p>
      
      <p className="text-lg mb-2">
        <span className="font-semibold">Email:</span> 
        <a href="mailto:amitabhag17@gmail.com" className="text-blue-600 hover:underline ml-1">
          amitabhag17@gmail.com
        </a>
      </p>

      <p className="text-lg">
        <span className="font-semibold">Location:</span> Kolkata, India
      </p>
    </div>
  );
}

export default Contact;
