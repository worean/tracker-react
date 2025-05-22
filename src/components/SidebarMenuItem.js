import React from 'react';
import { NavItem, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// 이 컴포넌트는 Sidebar의 메뉴 항목을 나타냅니다.
// icon, label, onClick, href 등의 props를 받아서 메뉴 항목을 구성합니다.
const SidebarMenuItem = ({ icon, label, onClick, href }) => {
    return (
        // NavItem은 Bootstrap의 네비게이션 항목을 나타냅니다.
        <NavItem className='d-flex w-100 px-3 py-2 flex-fill
            rounded-0 justify-start d-flex align-items-center
            shadow-none border-0 hover:bg-slate-100 active:bg-slate-200'>
            <Link href={href} className="text-decoration-none">
                <NavLink className="d-flex align-items-center" onClick={onClick}>
                    {icon && <span className="me-2">{icon}</span>}
                    <span>{label}</span>
                </NavLink>
            </Link>
        </NavItem>
    );
};

export default SidebarMenuItem;