import React, { useContext, useState } from 'react';
import { FirebaseContext } from "../Firebase/FirebaseContext";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { firebase } = useContext(FirebaseContext);
  const auth = getAuth(firebase);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 
    try {
      const userCredential = await signInWithEmailAndPassword(auth, Email, password);
      console.log("User logged in:", userCredential.user.email);
      navigate('/'); 
    } catch (error) {
      console.error("Error signing in:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg"
        alt="Background"
      />
      <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />

      <div className="fixed w-full px-4 py-24 z-20">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
          <div className="max-w-[320px] mx-auto py-16 text-white">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col mt-4">
              {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
              <input
                className="p-3 my-2 bg-gray-700 rounded text-white placeholder-gray-400"
                type="email"
                value={Email}
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="p-3 my-2 bg-gray-700 rounded text-white placeholder-gray-400"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-red-600 py-3 my-4 rounded font-bold hover:bg-red-700 transition"
              >
                Sign In
              </button>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Remember me
                </label>
                <a href="#" className="hover:underline">
                  Need help?
                </a>
              </div>
              <p className="py-4">
                <span className="text-gray-400">New to Netflix?</span>{' '}
                <a href="/signup" className="text-red-600 hover:underline">
                  Sign Up Now
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
