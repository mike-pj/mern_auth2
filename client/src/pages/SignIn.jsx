import { useState } from 'react';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const [formData, setformData] = useState();
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value })
  }

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(false)
      setLoading(true)
      const res = await fetch('/api/auth/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if(data.success === false) {
        setError(true);
        return;
      }
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(true)
    }

  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type="email"
          placeholder='Email'
          id='email'
          className='bg-slate-100 rounded-lg p-3'
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder='Password'
          id='password'
          className='bg-slate-100 rounded-lg p-3'
          onChange={handleChange}
        />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
         { loading ? "loading..." : "SIGN IN"}
        </button>
      </form>
      <div className='flex gap-1 mt-5'>
        <p>Dont have an account?</p>
        <Link to="/sign-up">
          <span className='text-blue-500'>Sign up</span>
        </Link>
      </div>
      <p className='text-red-600 mt-5'>{error && "Something went wrong"}</p>
    </div>
  )
}

export default SignIn