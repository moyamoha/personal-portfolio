const { createSlice } = require("@reduxjs/toolkit");

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: { blogs: [] },
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
  },
});

export const { setBlogs } = dataSlice.actions;
export default dataSlice.reducer;
