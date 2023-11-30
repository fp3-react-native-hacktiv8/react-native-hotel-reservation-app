import { configureStore } from "@reduxjs/toolkit";
import SavedReducer from "./savedReducer/SavedReducer";

export default configureStore({
  reducer: {
    booking: SavedReducer,
  },
});
