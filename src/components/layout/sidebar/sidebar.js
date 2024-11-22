import React, { useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import classNames from 'classnames';
// 왼쪽 사이드바에 추가될 컴포넌트
const Sidebar = ({children}) => {
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
      className={classNames('sidebar d-flex flex-column position-fixed h-100 border-end', {
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

      <div className="sidebar-nav flex-fill border-top">
        {children}
      </div>

      <Button
        variant="link"
        className="sidebar-toggler d-none d-md-inline-block rounded-0 text-end pe-4 fw-bold shadow-none border-top"
        onClick={toggleIsNarrow}
        type="button"
        aria-label="sidebar toggler"
      >
      Test
      </Button>
    </div>
    );
}
export default Sidebar;