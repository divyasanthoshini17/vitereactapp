import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/productsAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import { todoApi } from "./services/Todosdb";
import { formApi } from "./services/formAPi";

export const store=configureStore({
    reducer:{
        [productsApi.reducerPath]:productsApi.reducer,
        [todoApi.reducerPath]:todoApi.reducer,
        [formApi.reducerPath]:formApi.reducer,
    },

    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(productsApi.middleware,todoApi.middleware,formApi.middleware),
})
console.log("STORE LOADED");
setupListeners(store.dispatch)