import React from 'react';
import SideBar from "../components/SideBar";
import style from './AppLayout.module.css';
import Map from "../components/Map";
import User from "../components/User.jsx";

function AppLayout() {
    return (
        <div className={style.app}>
            <SideBar/>
            <Map/>
            <User/>
        </div>
    );
}

export default AppLayout;