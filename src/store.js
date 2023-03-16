import {configureStore} from "@reduxjs/toolkit"
import auth from "./authSlide/authSlide"
const store = configureStore({
    reducer:{
        auth,
    }
})
export default store;