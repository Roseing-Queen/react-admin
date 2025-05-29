import {configureStore} from "@reduxjs/toolkit";
import LayoutsStore from "@/store/module/LayoutsStore/LayoutsStore.tsx";

const store=configureStore({
    reducer:{LayoutsStore}
})
export default store;
