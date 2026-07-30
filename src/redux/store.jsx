import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';
import searchReducer from './slices/searchSlice'
import wishlistReducer from './slices/wishlistSlice'
import productReducer from './slices/productSlice'
import orderReducer from './slices/orderSlice'
import {
    persistStore,
    persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    cart: cartReducer,
    search: searchReducer,
    wishlist: wishlistReducer,
    products: productReducer,
    orders: orderReducer,
});

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);