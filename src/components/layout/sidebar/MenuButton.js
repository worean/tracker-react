import React from 'react';
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
                <div className='flex flex-col aspect-square w-10 h-10 justify-center align-middle items-center'>
                    <FontAwesomeIcon className='aspect-auto' icon={icon} />
                </div>
                <text>{title}</text>
            </button>
        </li>
    );
};

export default MenuButton;