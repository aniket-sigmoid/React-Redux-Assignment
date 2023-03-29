import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../components/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;