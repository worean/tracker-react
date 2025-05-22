import React, { useEffect, useState } from 'react';
import 'styles/sidebar.css';
import { Accordion, Button, Nav, useAccordionButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const SidebarToggleButton = ({ eventKey, icon, children }) => {

    useEffect(() => {
        const handleClick = () => {
            setIsOpen(!isOpen);
        };

        return () => {
            // Cleanup if needed
        };
    }
        , []);
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=' hover:bg-slate-100 active:bg-slate-200'>
            <Button className="flex w-100 px-3 py-2 flex-fill
         rounded-0 justify-start d-flex align-itmes-center
        shadow-none border-0 text-decoration-none"
                variant="link"
                onClick={useAccordionButton(eventKey)}>
                {icon}
                {children}
                <div className="ms-auto text-end">

                    <FontAwesomeIcon className={classNames("text-secondary", { "rotate-180": isOpen })} icon={faChevronUp} />
                </div>
            </Button>
        </div>
    );
}

const SidebarMenuGroup = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Accordion className="flex-column w-auto">
            <SidebarToggleButton eventKey="0" onClick={setIsOpen}>
                {title}
            </SidebarToggleButton>
            <Accordion.Collapse eventKey="0" >
                <ul className='flex-column w-100'>
                    {children}
                </ul>
            </Accordion.Collapse>
        </Accordion>
    );
};

export default SidebarMenuGroup;