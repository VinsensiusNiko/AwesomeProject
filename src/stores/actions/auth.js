const AUTH_DATA = '[AUTH].DATA';

export default {
  name: {
    AUTH_DATA,
  },
  set: (data) => ({
    type: AUTH_DATA,
    user: data,
  }),
};
