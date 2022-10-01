const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

module.exports = userSlice.reducer;
module.exports.userSliceAction = userSlice.actions;
