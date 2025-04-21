import { Stack } from "expo-router";

const _layout: React.FC = () => {
    return (
        <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
            <Stack.Screen name="index" />
            <Stack.Screen name="register" />
        </Stack>
    );
};

export default _layout;
