import React from 'react';
import IssueCard from '../../components/IssueCard';
import { Accordion, Nav, NavItem } from 'react-bootstrap';
import Sidebar from './sidebar';

const MainPage = () => {

    return (
        <div className="d-flex" >
            <Sidebar />
            <div className="flex-grow-1 p-3">
                <div className="d-flex flex-wrap">
                    Test
                </div>
            </div>
        </div>
    );
};

export default MainPage;