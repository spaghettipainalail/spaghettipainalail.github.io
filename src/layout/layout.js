import React from 'react';
import Header from '../menu/header.js';
import { Outlet, Link } from "react-router-dom";
import '../style.css';


const Layout =({children}) =>{
    return(
        <>
        <div>
            <Header/>
        </div>
        <Outlet />
        </>
    )
}

export default Layout;