import React, { useState } from 'react';
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { Link } from 'react-router-dom';
import rec from "../images/rec.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../firebase";
import { collection, query, where, getDocs } from 'firebase/firestore';
import "../style.scss";

const Inside = ({ currentUser }) => {

    const [userName, setUserName] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);

    const handleSearch = async () => {

        const q = query(collection(db, "usersInfo"), where("displayName", "==", userName));
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });
        } catch (err) {
            setErr(true);
        }
    };
    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    };

    const handleSelect = async () => {

    }

    return (

        <div className='homepage'>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h4 style={{ color: "white", marginLeft: "20px", marginRight: "1170px" }}>JOB LO</h4>
                <button onClick={() => signOut(auth)}><Link to="/"> logout</Link></button>
            </nav>
            <h2 style={{ marginLeft: "20px" }}>Hi, {currentUser.displayName}</h2>
            <div className="container mt-4">
                <div className='search'>
                    <div className='form'>
                        <h2>Search Here:</h2>
                        <input typr="text" placeholder='Search by job role/name' onKeyDown={handleKey}
                            onChange={(e) => setUserName(e.target.value)} value={userName} />
                    </div>
                    {err && <span>Not Found!</span>}
                    {user && (<div className="chats" onClick={handleSelect}>
                        <div className="userInfo">
                            <div className="userchatinfo" style={{
                                backgroundColor: "yellow",
                                borderRadius: "8px",
                                marginTop: "10px",
                                width: "400px",
                                height: "150px"
                            }}>
                                <h3 style={{ marginLeft: "10px", marginBottom: "20px" }}>Name: {user.displayName}</h3>
                                <h5 style={{ marginLeft: "10px", marginBottom: "20px" }}>Job Role: {user.jobRole}</h5>
                                <h5 style={{ marginLeft: "10px" }}>E-mail: {user.email}</h5>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                <div style={{ marginLeft: "170px" }}>
                    <img src={rec} alt="Recruitment" />
                    <h3 style={{ marginLeft: "140px", marginTop: "-40px" }} >Find Your Dream Job!</h3>
                </div>
            </div>
        </div>
    )
}

export default Inside
