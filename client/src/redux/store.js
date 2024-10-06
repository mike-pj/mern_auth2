import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
    // reducer: {user: userReducer},
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),

    // from here we go to main.jsx and import
// 1.) store from redux folder
// 2.) provider from react-redux
});


export const persistor = persistStore(store);
// from here we go to main.jsx and import
// persist as persistGate

