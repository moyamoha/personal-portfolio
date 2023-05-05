const { createSlice } = require("@reduxjs/toolkit");

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: { blogs: [], showNotif: false },
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    setShowNotif: (state, action) => {
      state.showNotif = action.payload;
    }
  },
});

export const { setBlogs } = dataSlice.actions;
export default dataSlice.reducer;
