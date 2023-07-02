import React from 'react'
import { auth, db } from "../firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const jobRole = e.target[2].value;
    const password = e.target[3].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      await updateProfile(res.user, {
        displayName,
        jobRole,
      });
      await setDoc(doc(db, "usersInfo", res.user.uid), {
        displayName,
        jobRole,
        email,
        uid: res.user.uid,
      });
      await setDoc(doc(db, "userThings", res.user.uid), {});
      navigate("/inside");

    } catch (err) {
      setErr(true);
   
    }
       console.log(err)
  }
  return (
    <div className='ocontainer'>
      <div className='icontainer'>
        <span className='logo'>JOB LO!</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Display Name' />
          <input type="text" placeholder='E-mail' />
          <input type="text" placeholder='Job Role' />
          <input type="text" placeholder='Password' />
          <button>Sign In</button>
          {err && <span>Something went wrong....</span>}
        </form>
        <p>You do have an Account?<Link to="/login">Login</Link> </p>
      </div>
    </div>
  )
}

export default Register
