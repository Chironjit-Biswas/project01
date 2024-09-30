import React from 'react'
import './Navbar.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (

        <>
     <div className={'w-[1920] h-auto bg-black text-amber-50 items-center justify-center'}>
        <div className={'flex justify-between max-w-[1402px] items-center mx-[50px] py-[20px]'}>
            <div className={'max-w-[1402] text-2xl'}>
                <h2 className={'text-[#F0B71F] px-1'}>Cyber.AI</h2>
            </div>
            <div>
                <ul className={'flex gap-5 text-white px-[244] c-navlist justify-center'}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/pages">Pages</NavLink></li>
                    <li><NavLink to="/support">Support</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div className='cbutton'>
                <button  className={'rounded-[5px] px-1'}>Get Started</button>
            </div>
        </div>
      </div>
        </>
    )
}
