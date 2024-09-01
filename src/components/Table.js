import React, { useState } from 'react';
import './Table.css';

const Table = () => {
  const [rows, setRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newRow, setNewRow] = useState({ name: '' });
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const getNextId = () => {
    if (rows.length === 0) return 1;
    const lastId = rows[rows.length - 1].id;
    return lastId + 1;
  };

  const handleAddRow = () => {
    if (newRow.name) {
      const id = getNextId();
      if (editingRowIndex !== null) {
        const updatedRows = rows.map((row, index) =>
          index === editingRowIndex ? { ...row, name: newRow.name } : row
        );
        setRows(updatedRows);
        setEditingRowIndex(null);
      } else {
        setRows([...rows, { id, name: newRow.name }]);
      }
      setNewRow({ name: '' });
      setShowForm(false);
    } else {
      alert('Name to\'ldirilishi kerak');
    }
  };

  const handleShowForm = () => {
    setShowForm(true);
    setNewRow({ name: '' });
    setEditingRowIndex(null);
  };

  const handleEditRow = (index) => {
    setEditingRowIndex(index);
    setNewRow({ name: rows[index].name });
    setShowForm(true);
  };

  const handleDeleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const filteredRows = rows.filter(row =>
    row.id.toString().includes(searchQuery) || row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="table-container">
      <div className="table-header">
        <button className="add-button" onClick={handleShowForm}>
          Добавить
        </button>
        {showForm && (
          <div className="form-container">
            <input
              type="text"
              placeholder="Название"
              value={newRow.name}
              onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
            />
            <button className="add-button" onClick={handleAddRow}>
              {editingRowIndex !== null ? 'Save' : 'Добавить'}
            </button>
            <button className="cancel-button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        )}
        <input
          type="text"
          placeholder="Поиск..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.length > 0 ? (
            filteredRows.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>
                  <button className="edit-button" onClick={() => handleEditRow(index)}>
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                  <button className="delete-button" onClick={() => handleDeleteRow(index)}>
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination">
        <button>Последняя</button>
        <button>Следующая</button>
        <span>1</span>
      </div>
    </div>
  );
};

export default Table;
