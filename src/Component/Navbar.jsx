import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { FirebaseContext } from "../Firebase/FirebaseContext";

const Navbar = () => {
  const { firebaseContext } = useContext(FirebaseContext); 
  const auth = getAuth(firebaseContext); 
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
    });

   
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };



  const getUsername = (email) => {
    if (!email) return "User"; 
    return email.split('@')[0];
  };

  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
      <Link to="/">
        <h1 className="uppercase text-red-600 font-nsansBold cursor-pointer text-5xl">
          Netflix
        </h1>
      </Link>

      <div>
        {user ? (
          <>
            <Link to='/profile'>
            <span className="capitalize pr-4">{getUsername(user.email) || "User"}</span>
            </Link>

            

             <button
              onClick={handleLogout}
              className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer"
            >
              Logout
            </button>
           
            
          </>
        ) : (
          <>
            <Link to="login">
              <button className="capitalize pr-4">LOGIN</button>
            </Link>
            <Link to="signup">
              <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer">
                SIGNUP
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
