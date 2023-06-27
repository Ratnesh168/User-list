import axios from 'axios';

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const data = response.data;
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    }
  };
};

export const deleteUser = (id) => {
  return { type: 'DELETE_USER', payload: id };
};

export const editUser = (id, name) => (
  {
  type: 'EDIT_USER',
  payload: { id, name },
});
