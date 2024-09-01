import React, { useState } from 'react';
import NavigationMenu from './components/NavigationMenu';
import TopBar from './components/TopBar';
import Table from './components/Table'; // Table komponentini import qilish
import './styles/Layout.css';

function App() {
  const [showTable, setShowTable] = useState(false); // Table ni ko'rsatish uchun holatni yaratamiz

  return (
    <div className="layout-container">
      <NavigationMenu onSubItemClick={(section, subItem) => {
        // Agar 'Склады' bo'limi bosilsa, Table ni ko'rsatamiz
        if (section === 'Склад' && subItem === 'Склады ') {
          setShowTable(true);
        } else {
          setShowTable(false);
        }
      }} />
      <div className="content-area">
        <TopBar />
        <div className="dashboard-content">
          {showTable && <Table />} {/* showTable true bo'lsa, Table komponentini ko'rsatamiz */}
        </div>
      </div>
    </div>
  );
}

export default App;
