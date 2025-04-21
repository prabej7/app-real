import { View } from "@/components/Themed"
import { StyleSheet } from 'react-native';
import { Button, CoverImage, LoginForm, TermAndPolicy } from "@/components/user";
import { useDevTheme } from "@/hooks";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store"
import { useAppDispatch } from "@/store/hook";
import { fetchUser } from "@/store/thunks/userThunks";

export type FormStatus = "stable" | "error" | "loading";

const Login: React.FC = () => {
    const { border } = useDevTheme();
    const { push } = useRouter();
    const dispatch = useAppDispatch();
    useEffect(() => {
        (async () => {
            const token = await SecureStore.getItemAsync("token");
            if (token) {
                const result = await dispatch(fetchUser());

                if (fetchUser.fulfilled.match(result)) {
                    push("/(tabs)");
                } else {
                    SecureStore.deleteItemAsync("token");
                    push("/(auth)")
                }
            }
        })();
    }, []);



    return <View style={styles.container} >
        <CoverImage path={require("../../assets/images/login.svg")} />
        <LoginForm />
        <View style={{ width: "100%", backgroundColor: border, height: 1, marginVertical: 12 }} ></View>
        <Button variant="secondary" onPress={() => push("/(auth)/register")} width={"100%"} >Register</Button>
        <TermAndPolicy />
    </View>
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 48,
        flexDirection: "column",
        gap: 6,
        width: "100%"
    },
    img: {
        width: "80%",
        height: undefined,
        maxWidth: 250,
        aspectRatio: 1
    },
    title: {
        fontSize: 36,
        fontFamily: "Bold",
        paddingVertical: 12,
        textAlign: "center"
    },
    form: {
        width: "100%",

        display: "flex",
        flexDirection: "column",
        gap: 6
    },
    input: {
        fontFamily: "Regular"
    }
})