import { Text, View } from "@/components/Themed"
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Button, Input } from "tamagui";
import { useDevTheme } from "@/hooks";
import { Link } from "expo-router";
import { useState } from "react";
import { FormStatus } from ".";
import axios, { AxiosError } from "axios";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { api } from "@/constants/api";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [status, setStatus] = useState<FormStatus>("stable");
    const [showPass, setShowPassword] = useState<boolean>(false);
    const { primary, border } = useDevTheme();
    const [errorMsg, setErrorMsg] = useState<string>("");
    const { setItem } = useAsyncStorage("token");

    const onSubmit = async () => {
        setStatus("loading");
        try {
            const { data } = await axios.post(api + "register", {
                email, password
            });
            console.log(data)
            setItem(data.token);
            setStatus("stable");
        } catch (error) {
            const { status } = error as AxiosError;
            if (status == 409) {
                setErrorMsg("User already exists.");
            } else {
                setErrorMsg("Something went wrong!");
            }
            setStatus("error");
        }
    }

    const toggleShowPass = () => setShowPassword(!showPass);

    return <View style={styles.container}  >
        <View>
            <Image
                source={require("../../assets/images/register.svg")}
                contentFit="contain"
                style={styles.img}
            />
        </View>
        <View style={styles.form} >
            <Text style={styles.title}>Register</Text>

            {status == "error" && <Text style={{ color: "red",textAlign:"center" }} >{errorMsg}</Text>}
            <Input placeholder="Email" style={styles.input} onChangeText={setEmail}  />
            <View style={{ position: "relative" }} >
                <Input placeholder="Password" style={styles.input} onChangeText={setPassword} secureTextEntry={!showPass} />
                {showPass ? <AntDesign name="eye" size={24} color="black" style={[{
                    position: "absolute",
                    right: 10,
                    top: "25%"
                }]} onPress={toggleShowPass} /> : <Ionicons name="eye-off" size={24} color="black" style={[{
                    position: "absolute",
                    right: 10,
                    top: "25%"
                }]} onPress={toggleShowPass} />}
            </View>
            <Button onPress={onSubmit} style={[{ backgroundColor: status == "loading" ? "grey" : primary, color: "white" }]} >
                {status == "loading" ? <ActivityIndicator color={"white"} /> : "Register"}
            </Button>
        </View>
        <View style={{ width: "100%", backgroundColor: border, height: 1, marginVertical: 24 }} ></View>
        <View  >
            <Text>Already have an account ? <Link href="/(auth)" style={{ fontFamily: "SemiBold" }}  >Login</Link></Text>
        </View>
    </View>
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingHorizontal: 48
    },
    img: {
        width: "80%",
        height: undefined,
        maxWidth: 250,
        aspectRatio: 1
    },
    title: {
        fontFamily: "Bold",
        fontSize: 36,
        textAlign: "center",
        marginBottom: 12
    },
    input: {
        fontFamily: "Regular",
    },
    form: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 6
    }
})