import React, { useState } from 'react';
import logo from '../BIS.png'; // Faylni import qilish
import newLogo from '../nav.png'; // Yangi logoni import qilish
import './NavigationMenu.css';
import Table from './Table'; // Table komponentini import qilish

function NavigationMenu({ onSubItemClick }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState({ index: null, subIndex: null });
  const [showTable, setShowTable] = useState(false); // Jadval ko'rsatish holatini saqlash uchun

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubItemClick = (index, subIndex, sectionName, subItemName) => {
    setActiveSubItem({ index, subIndex });
    onSubItemClick(sectionName, subItemName); // onSubItemClick prop ni chaqiramiz
    if (sectionName === 'Склад') {
      setShowTable(true); // Jadvalni ko'rsatish
    } else {
      setShowTable(false); // Jadvalni yashirish
    }
  };

  const sections = [
    { name: 'Склад', subItems: ['Склады ', 'Продукты ', 'Ожидаемые переводы'] },
    { name: 'Отдел продаж', subItems: ['Заказы', 'Клиенты', 'Экспорт в Perfect Cut', 'Филиалы', 'Категории Услуг', 'Услуги', 'Наборы услуг'] },
    { name: 'Производство', subItems: ['Подразделение 1', 'Подразделение 2'] },
    { name: 'Бухгалтерия', subItems: [] },
    { name: 'Назначение цены', subItems: [] },
    { name: 'Отдел кадров', subItems: [] },
    { name: 'Настройки', subItems: [] },
    { name: 'Отчеты', subItems: [] },
    { name: 'Должники', subItems: [] },
    { name: 'Долг по менеджерам', subItems: [] },
    { name: 'Переводы', subItems: [] },
    { name: 'Доступы', subItems: [] },
    { name: 'Узнать задолженность', subItems: [] },
    { name: 'Мониторы', subItems: [] },
  ];

  return (
    <div className="navigation-menu">
      <div className="logo-section">
        <img src={logo} alt="Logo" />
        <img src={newLogo} alt="New Logo" />
      </div>

      <ul className="menu-list">
        {sections.map((section, index) => (
          <li key={index}>
            <div className="menu-item" onClick={() => handleToggle(index)}>
              {section.name} <span className="toggle-icon">{openIndex === index ? 'v' : '<'}</span>
            </div>
            {openIndex === index && (
              <ul className="submenu-list">
                {section.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className={`submenu-item ${
                      activeSubItem.index === index && activeSubItem.subIndex === subIndex ? 'active' : ''
                    }`}
                    onClick={() => handleSubItemClick(index, subIndex, section.name, subItem)}
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

    
    </div>
  );
}

export default NavigationMenu;
