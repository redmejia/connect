import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "../Redux/business";
import authSlice from "../Redux/auth";

export default configureStore({
	reducer : {
		business : businessSlice,
		auth :  authSlice, // business auth
	}
})