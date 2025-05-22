import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Nav } from 'react-bootstrap';
import 'styles/sidebar.css';
import SidebarMenuGroup from 'components/SidebarMenuGroup';
import SidebarMenuItem from 'components/SidebarMenuItem';


const Sidebar = ({ children }) => {

    const [wide, setWide] = useState(true);
    const toggleSidebar = () => {
        setWide(!wide);
    }

    // 초기화 작업 수행
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setWide(false);
            } else {
                setWide(true);
            }
        };
    });

    return (
        <div className='d-flex flex-col h-screen border-end bg-blue-200' style={{ width: wide ? '250px' : '80px', transition: 'width 0.3s' }}>
            {/* 사이드바 상단 */}
            <div className="d-flex justify-content-between align-items-center p-3">
                <h2>Sidebar</h2>

            </div>

            {/* 사이드바 메뉴 버튼 목록 */}
            <div className='d-flex flex-column h-full'>

                <SidebarMenuGroup title="Menu 1">
                    <SidebarMenuItem label="Item 1" icon={<i className="bi bi-house"></i>} onClick={() => alert('Item 1 clicked')} />
                    <SidebarMenuItem label="Item 2" icon={<i className="bi bi-house"></i>} onClick={() => alert('Item 2 clicked')} />
                    <SidebarMenuItem label="Item 3" icon={<i className="bi bi-house"></i>} onClick={() => alert('Item 2 clicked')} />
                </SidebarMenuGroup>


                <SidebarMenuGroup title="Menu 2">
                    <SidebarMenuItem label="Item 1" icon={<i className="bi bi-house"></i>} onClick={() => alert('Item 1 clicked')} />
                    <SidebarMenuItem label="Item 2" icon={<i className="bi bi-house"></i>} onClick={() => alert('Item 2 clicked')} />
                    <SidebarMenuItem label="Item 3" icon={<i className="bi bi-house"></i>} onClick={() => alert('Item 2 clicked')} />
                </SidebarMenuGroup>

                <SidebarMenuGroup title="Menu 3">
                    <SidebarMenuItem label="Item 1" icon={<i className="bi bi-house"></i>} onClick={() => alert('Item 1 clicked')} />
                    <SidebarMenuItem label="Item 2" icon={<i className="bi bi-house"></i>} onClick={() => alert('Item 2 clicked')} />
                    <SidebarMenuItem label="Item 3" icon={<i className="bi bi-house"></i>} onClick={() => alert('Item 2 clicked')} />
                </SidebarMenuGroup>
                {/* 일반 버튼 */}
                <Button variant="outline-primary" className="mt-3">
                    General Button
                </Button>
            </div>

            {/* 사이드바 하단 버튼*/}
            <div className='d-flex flex-row justify-content-between align-items-center p-3'>
                {wide ? <Button variant="secondary" className="" onClick={() => alert('Logout')}>
                    Logout
                </Button> : null}
                <Button variant="primary" onClick={toggleSidebar}>
                    {wide ? 'Collapse' : 'Expand'}
                </Button>
            </div>
        </div>
    );
};

export default Sidebar;