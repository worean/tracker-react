import React, { useContext, useState } from 'react';
import SidebarNavItem from './SidebarNavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sidebar.css';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Accordion, AccordionContext, Button, useAccordionButton } from 'react-bootstrap';
import classNames from 'classnames';


// 사이드바 그룹의 오른쪽 Toggle 버튼
const SidebarGroupButton = ({ title, icon, eventKey, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);

    console.log(title);
    // 아코디언 버튼을 클릭했을 때의 동작을 정의한다.
    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));
    return (
        <Button
            variant="link"
            type="button"
            className={classNames('rounded-0 nav-link px-3 py-2 d-flex align-items-center flex-fill w-100 shadow-none', {
                collapsed: !activeEventKey,
            })}
            onClick={decoratedOnClick}
        >
            <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
            {title}
            <div className="nav-chevron ms-auto text-end">
                <FontAwesomeIcon size="xs" icon={faChevronUp} />
            </div>
        </Button>
    )
}

// 사이드바 그룹 컴포넌트 정의 
const SidebarNavGroup = ({ title, icon, children }) => {
    // 사이드바 그룹의 확장 여부
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Accordion as="li" bsPrefix="nav-group">
            <SidebarGroupButton title={title} icon={icon} eventKey="0" callback={() => setIsExpanded(!isExpanded)} />
            {/* 아코디언 클릭시 출력되는 내용 */}
            <Accordion.Collapse eventKey="0">
                <ul className='av-group-items list-unstyled'>
                    {children.map((button, index) => (
                        <SidebarNavItem key={index} {...button} />
                    ))}
                </ul>
            </Accordion.Collapse>
        </Accordion>
    )
};

export default SidebarNavGroup;