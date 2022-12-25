import thunk from "redux-thunk";

const { configureStore } = require("@reduxjs/toolkit");
const { default: dataReducer } = require("./data.slice");

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
