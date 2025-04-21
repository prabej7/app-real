import { api } from "@/constants/api";
import { Room } from "@/constants/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { getItemAsync } from "expo-secure-store";

export const fetchRoom = createAsyncThunk("room/fetchRoom", async (_, { rejectWithValue }) => {
    try {
        const token = await getItemAsync("token");
        const { data } = await axios.get(`${api}all-rooms`, { headers: { Authorization: `Bearer ${token}` } });
        return data.rooms as Room[];
    } catch (error) {
        const { response, message } = error as AxiosError;
        return rejectWithValue(response?.data || message);

    }
})