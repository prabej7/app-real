import { api } from "@/constants/api";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import axios, { AxiosError } from "axios";
import { useRouter } from "expo-router";
import { useState } from "react";

const useAuth = () => {
    const { getItem } = useAsyncStorage("token");
    const [isLoading, setLoading] = useState<boolean>(false);
    const { push } = useRouter();

    const [token, setToken] = useState<string>('');

    const fetchUser = async () => {
        const storedToken = await getItem();

        if (!storedToken) {
            setToken("");
            return push("/(auth)");
        }

        setToken(storedToken);
        try {
            setLoading(true);
            const { data } = await axios.get(api + "user/", {
                headers: {
                    Authorization: `Bearer ${storedToken}`
                }
            });

            console.log(data)


        } catch (error) {
            const { status } = error as AxiosError;
            if (status == 401) {
                console.log(status);
                return push("/(auth)");
            }
        } finally {
            setLoading(false);
        }
    };
}

export default useAuth;