import React from 'react';
import SideBar from "../components/SideBar";
import style from './AppLayout.module.css';
import Map from "../components/Map";

function AppLayout() {
    return (
        <div className={style.app}>
            <SideBar/>
            <Map/>
        </div>
    );
}

export default AppLayout;