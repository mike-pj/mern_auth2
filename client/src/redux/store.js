import { configureStore } from '@reduxjs/toolkit'
import useReducer  from './user/userSlice';

export const store = configureStore({
    reducer: {user: useReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

// from here we go to main.jsx and import
// 1.) store from redux folder
// 2.) provider from react-redux