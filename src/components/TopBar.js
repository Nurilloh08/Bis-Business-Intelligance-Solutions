import React from 'react';
import './TopBar.css';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="logo">
        <svg width="36" height="39" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG kodi */}
          <path d="..." fill="#0A4D68" />
        </svg>
      </div>

      <div className="user-actions">
        <button className="logout">Выйти</button>
      </div>
    </div>
  );
}

export default TopBar;
