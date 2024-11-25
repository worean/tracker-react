import React, { useState } from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 왼쪽 사이드바에 추가될 컴포넌트
const MenuButton = ({ title, icon, to }) => {

    // 클릭시 메뉴에 해당되는 페이지로 이동
    const handleClick = () => {
        console.log('Clicked on', title);
        // todo : Add navigation

    };

    return (
        <li>
            <button onClick={handleClick} className="menu-button">
                <FontAwesomeIcon width={20} height={20} className='m-3' icon={icon} />
                <text>  {title}</text>
            </button>
        </li>
    );
};

export default MenuButton;