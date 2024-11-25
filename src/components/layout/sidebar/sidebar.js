import React, { useState, useEffect } from 'react';
import './sidebar.css';
import { faComment, faDashboard, faHome, faMagnet, faVault } from '@fortawesome/free-solid-svg-icons';
import MenuButton from './MenuButton';
import classNames from 'classnames';
import MenuButtonGroup from './MenuButtonGroup';
// 왼쪽 사이드바에 추가될 컴포넌트
const Sidebar = ({ children }) => {
  const [isNarrow, setIsNarrow] = useState(false);


  const toggleIsNarrow = () => {
    const newValue = !isNarrow
    localStorage.setItem('isNarrow', newValue ? 'true' : 'false')
    setIsNarrow(newValue)
  }

  // On first time load only
  useEffect(() => {
    if (localStorage.getItem('isNarrow')) {
      setIsNarrow(localStorage.getItem('isNarrow') === 'true')
    }
  }, [setIsNarrow])

  return (
    <div
      className={classNames('sidebar d-flex flex-column position-fixed h-100 w-52 border-end', {
        'sidebar-narrow': isNarrow
      })}
      id="sidebar"
    >
      <div className="sidebar-brand d-none d-md-flex align-items-center justify-content-center">
        <svg
          className="sidebar-brand-full"
          width="118"
          height="46"
        >
          <title>CoreUI Logo</title>
          <use xlinkHref="/assets/brand/coreui.svg#full" />
        </svg>
        <svg
          className="sidebar-brand-narrow d-none"
          width="46"
          height="46"
        >
          <title>CoreUI Logo</title>
          <use xlinkHref="/assets/brand/coreui.svg#signet" />
        </svg>
      </div>

      <div className="flex flex-col">
        <MenuButton title="Home" icon={faHome} to="/" />
        <MenuButtonGroup title="Test Group" icon={faMagnet}
          children={[
            { title: "test1", icon: faVault },
            { title: "test2", icon: faDashboard },
            { title: "test3", icon: faComment }]}
        />
      </div>

    </div>
  );
}
export default Sidebar;