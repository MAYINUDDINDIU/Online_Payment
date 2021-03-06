import React from 'react';
import logo from '../../assets/icon/filic.png'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { AiOutlineReconciliation } from "react-icons/ai";
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (


        <div class="navbar bg-[#1faa00] lg:px-28">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className=' rounded font-bold'><NavLink to='/'><AiOutlineHome />HOME</NavLink ></li>
                        <li><NavLink to='/about'>ABOUT FAREAST</NavLink ></li>
                        <li><NavLink to='/contact_us'>CONTACT US</NavLink ></li>

                    </ul>
                </div>

                <img className='w-14  shadow-lg bg-white rounded-full p-1 hidden lg:block' src={logo} />
                <a class="btn btn-ghost normal-case text-xl text-white font-bold">FAREAST ISLAMI LIFE</a>

            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal tex-white p-0">
                    <li className='rounded font-bold text-white'><NavLink className='text-white' to='/'><AiOutlineHome />HOME</NavLink></li>
                    <li className=' pl-1 rounded  text-white  '><NavLink className='text-white' to='/about'>ABOUT FAREAST</NavLink ></li>
                    <li className='pl-1  text-white '><NavLink className='text-white' to='/contact_us'>CONTACT US</NavLink ></li>
                    {/* <li className='pl-1  text-white '><NavLink className='text-white' to='https://api.fareastislamilife.com/nagadPG/index.php'></NavLink ></li> */}
                    <li className='pl-1  text-white '> <a href="https://api.fareastislamilife.com/nagadPG">Payment Gateway</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;