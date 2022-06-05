import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "../Redux/business";

export default configureStore({
	reducer : {
		business : businessSlice,
	}
})