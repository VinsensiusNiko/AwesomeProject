import AUTH_ACTION from '../actions/auth';

const initialState = {
  user: null,
};

const REDUCER_AUTH = (prevState = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION.name.AUTH_DATA:
      return {
        ...prevState,
        user: action.user,
      };
    default:
      return prevState;
  }
};

export default REDUCER_AUTH;
