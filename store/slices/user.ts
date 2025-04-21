import { User } from "@/constants/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/userThunks";

const initialState: User = {
    address: "",
    avatar: "",
    createdAt: "",
    email: "",
    fullName: "",
    id: "",
    lat: 0,
    lon: 0,
    phone: "",
    role: "",
    updatedAt: "",
    username: "",
    verified: false
}

export const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
        setUser: (_, action: PayloadAction<User>) => {
            return action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(fetchUser.rejected, (_, action) => {
            console.warn("Fetch user failed: ", action.payload);
            return initialState;
        })
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;