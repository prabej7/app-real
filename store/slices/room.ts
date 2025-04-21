import { Room } from "@/constants/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRoom } from "../thunks/roomThunk";

const initialState: Room[] = [];

export const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        setRooms: (_, action: PayloadAction<Room[]>) => {
            return action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchRoom.fulfilled, (_, action) => {
            return action.payload;
        })

        builder.addCase(fetchRoom.rejected, (_, action) => {
            console.warn("Failed to fetch rooms: ", action.payload);
            return initialState;
        })
    },
});

export const { setRooms } = roomSlice.actions;

export default roomSlice.reducer;