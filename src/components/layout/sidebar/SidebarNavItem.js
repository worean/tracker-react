import React from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { Button, NavItem, NavLink } from 'react-bootstrap';

// 왼쪽 사이드바에 추가될 컴포넌트
const SidebarNavItem = ({ title, icon, to }) => {

    const navigate = useNavigate();

    // 클릭시 메뉴에 해당되는 페이지로 이동
    const handleClick = () => {
        console.log('Clicked on', title);
        navigate(to);
    };

    return (
        <NavItem>
            <NavLink onClick={handleClick} className="px-3 py-2 d-flex align-items-center">
                <FontAwesomeIcon className='aspect-auto' icon={icon} />
                <text>{title}</text>
            </NavLink>
        </NavItem>
    );
};

export default SidebarNavItem;