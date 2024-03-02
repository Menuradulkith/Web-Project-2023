import React from 'react'
import './Home.css';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();
    return (
        <div className='wrp'>
        <div className="topic">
            <h1>Personal Finance Tracker</h1>
            
        </div>
        <div className="keyline">
            <h2>Track your income and expenses, quickly and easily.</h2>
            <p>Know where your money goes and keep your finances under control with Tracker.</p>

        </div>
        <button onClick={() => navigate("/login")}>Get Start</button>
        <IoIosArrowForward className='icon'/>
        </div>
        
        
    )
}