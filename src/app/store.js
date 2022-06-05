import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "../Redux/business";
import signinSlice from "../Redux/signin";

export default configureStore({
	reducer : {
		business : businessSlice,
		signin :  signinSlice,
	}
})