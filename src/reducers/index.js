const initialState = {
    users: [],
    loading: false,
    error: null,
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_USERS_SUCCESS':
        return {
          ...state,
          users: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_USERS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'DELETE_USER':
        const filteredUsers = state.users.filter((user) => user.id !== action.payload);
        return {
          ...state,
          users: filteredUsers,
          loading: false,
          error: null,
        };
        case 'EDIT_USER':
        return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id
            ? { ...user, name: action.payload.name }
            : user
        ),
      };
      default:
        return state;
    }
  };
  
  export default usersReducer;