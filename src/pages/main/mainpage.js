import React from 'react';
import Sidebar from '../../components/layout/sidebar/sidebar';
import { Link } from 'react-router-dom';

const MainPage = () => {

    return (
        <div >
            <Sidebar />
            <Link to="/login">Login</Link>
        </div>
    );
};

export default MainPage;