import React from 'react';
import logo from '../../assets/icon/filic.png'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { AiOutlineReconciliation } from "react-icons/ai";


import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div class="navbar bg-green-500 lg:px-28">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='bg-green-600 active rounded font-bold text-white'><Link to='/'><AiOutlineHome />HOME</Link></li>
                        <li><Link to='/about'>ABOUT FAREAST</Link></li>
                        <li><a><AiOutlineFileDone />CONTACT US</a></li>

                    </ul>
                </div>

                <img className='w-14  shadow-lg bg-white rounded-full p-1 hidden lg:block' src={logo} />
                <a class="btn btn-ghost normal-case text-xl text-white font-bold">FAREAST LIFE</a>

            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li className='bg-green-600 active rounded font-bold text-white'><Link to='/'><AiOutlineHome />HOME</Link></li>
                    <li className='pl-1 rounded  text-white hover:bg-green-60'><Link to='/about'>ABOUT FAREAST</Link></li>
                    <li className='pl-1 hover:bg-green-60 text-white hover:bg-green-60 '><a>CONTACT US</a></li>

                </ul>
            </div>

        </div>
    );
};

export default Navbar;