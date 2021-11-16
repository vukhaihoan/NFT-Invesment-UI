import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "reducer/couterSlide";
export default configureStore({
  reducer: { counter: counterReducer },
});
