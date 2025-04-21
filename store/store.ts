import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import roomsReducer from "./slices/room";

export const store = configureStore({
    reducer: {
        user: userReducer,
        rooms: roomsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;