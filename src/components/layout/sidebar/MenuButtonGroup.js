import React, { useState } from 'react';
import MenuButton from './MenuButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sidebar.css';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const MenuButtonGroup = ({ title, icon, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
        console.log('Clicked on', title, isExpanded);
    };

    return (
        <div className='flex flex-col'>
            <li>
                <button className='menu-button' onClick={handleToggle}>
                    <div className='flex flex-col aspect-square w-10 h-10 justify-center align-middle items-center'>
                        <FontAwesomeIcon className='' icon={icon} />
                    </div>
                    <text>{title}</text>
                    <FontAwesomeIcon className={isExpanded ? 'flex overflow-hidden items-center justify-center m-3 rotate-180' : 'flex overflow-hidden items-center justify-center m-3'} icon={faAngleUp} />
                </button>
            </li>
            <div className='flex flex-col overflow-hidden'>
                <li className={isExpanded ? 'flex flex-col ml-5 slide-top' : 'flex flex-col ml-5 slide-bottom'}>
                    {/* title, icon, to 3개 매개변수가 필요 */}
                    {children.map((button, index) => (
                        <MenuButton {...button} />
                    ))}
                </li>
            </div>
        </div>
    );
};

export default MenuButtonGroup;