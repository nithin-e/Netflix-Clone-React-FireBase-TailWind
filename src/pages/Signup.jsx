import React, { useContext, useState } from "react";
import { FirebaseContext } from "../Firebase/FirebaseContext";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc,serverTimestamp } from "firebase/firestore";
import { db } from "../util/FirebaseConfic";
import { Link, useNavigate } from 'react-router-dom';  

const Signup = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { firebaseContext } = useContext(FirebaseContext);
  const auth = getAuth(firebaseContext);
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { email, password } = formData;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User successfully signed up:", userCredential);

      await updateProfile(userCredential.user, { displayName: email });

      // try {
      //   const userId = userCredential.user.uid;
      //   await setDoc(doc(db, 'users', userId), {
      //     email: email,
      //     createdAt: serverTimestamp(),
      //   });
      //   console.log('User document created successfully');
      // } catch (error) {
      //   console.error('Error creating user document:', error);
      // }

      navigate('/login');
      setSuccess("Signup successful! You can now log in.");
    } catch (error) {
      setError(error.message || "Failed to sign up. Please try again.");
    }
  };

  return (
    <>
      <div className="w-full h-screen relative">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg"
          alt="Background"
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />

        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16 text-white">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form onSubmit={handleSubmit} className="w-full flex flex-col mt-4">
                {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                {success && <div className="text-green-500 text-sm mb-4">{success}</div>}
                <input
                  className="p-3 my-2 bg-gray-700 rounded text-white placeholder-gray-400"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleInputChange}
                  required
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded text-white placeholder-gray-400"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="submit"
                  className="bg-red-600 py-3 my-4 rounded font-bold hover:bg-red-700 transition"
                >
                  Sign Up
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
                  <span className="text-gray-400">Already have an account?</span>{" "}
                  <a href="/login" className="text-red-600 hover:underline">
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
