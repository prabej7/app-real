import { Text, View } from "@/components/Themed"
import { useDevTheme } from "@/hooks";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { StyleSheet } from "react-native";

interface Props {
    title: string;
}

const Header: React.FC<Props> = ({ title }) => {
    const { back } = useRouter();
    const { text } = useDevTheme();
    return (
        <View style={styles.container}>
            <View style={styles.backButton}>
                <ArrowLeft color={text} size={20} onPress={back} />
            </View>
            <Text style={[styles.title, { color: text }]} numberOfLines={1} ellipsizeMode="tail">
                {title}
            </Text>
            <View style={styles.spacer} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "rgba(0,0,0,0.1)",
    },
    backButton: {
        padding: 4,
        marginLeft: -4,
    },
    title: {
        fontSize: 17,
        fontFamily: "Bold",
        fontWeight: '600',
        textAlign: 'center',
        position: 'absolute',
        left: 72,
        right: 72,
    },
    spacer: {
        width: 32,
    }
});