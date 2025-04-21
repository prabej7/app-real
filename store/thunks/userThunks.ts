import { api } from "@/constants/api";
import { User } from "@/constants/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import * as SecureStore from "expo-secure-store";

export const fetchUser = createAsyncThunk<User>("user/fetchUser",
    async (_, { rejectWithValue }) => {
        try {
            const token = await SecureStore.getItemAsync("token");
            if (!token) throw new Error("No token found!");

            const { data } = await axios.get(`${api}user/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return data as User;
        } catch (error) {
            const { response, message } = error as AxiosError;
            return rejectWithValue(response?.data || message)
        }
    }
)