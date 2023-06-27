import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser, editUser } from './actions';
import './App.css';

const App = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUserName, setEditedUserName] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (id, name) => {
    setEditingUserId(id);
    setEditedUserName(name);
  };

  const handleSave = (id) => {
    dispatch(editUser(id, editedUserName));
    setEditingUserId(null);
    setEditedUserName('');
  };

  return (
    <div className="container">
      <h1>User List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City with Zip Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={editedUserName}
                    onChange={(e) => setEditedUserName(e.target.value)}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{`${user.address.city} ${user.address.zipcode}`}</td>
              <td>
                {editingUserId === user.id ? (
                  <button
                    className="save-button"
                    onClick={() => handleSave(user.id)}
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(user.id, user.name)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
