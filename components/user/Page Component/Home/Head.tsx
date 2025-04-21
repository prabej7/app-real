import { Text, View } from "@/components/Themed"
import { app_name } from "@/constants";
import { StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons"
import { useDevTheme } from "@/hooks";
import { InputFrame } from "tamagui";
const Head: React.FC = () => {

    const { border, text, primary } = useDevTheme();

    return <View style={styles.container} >
        <Text style={styles.title} >Explore {app_name}</Text>
        <View style={[styles.searchContainer, { borderColor: border }]} >
            <InputFrame backgroundColor={"transparent"} borderWidth={0} color={text} fontFamily={"Light"} cursorColor={primary} placeholder="Search City" placeholderTextColor={border} flex={1} />
            <EvilIcons name="search" size={32} color={primary} style={styles.icon} />
        </View>
    </View>
};

export default Head;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 12
    },
    title: {
        fontFamily: "Bold",
        fontSize: 18,
        textAlign: "center"
    },
    searchContainer: {
        borderWidth: 1,
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icon: {
        marginRight: 6,
        marginBottom: 6

    }
})