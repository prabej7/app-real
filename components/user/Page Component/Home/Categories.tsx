import { Text, View } from "@/components/Themed"
import { useDevTheme } from "@/hooks";
import { Building, Home, Sprout } from "lucide-react-native";
import { FlatList, StyleSheet } from "react-native";


const Categories: React.FC = () => {
    const { primary, offBg } = useDevTheme();
    const iconProps = {
        color: primary,
        size: 28
    };
    const categories: { icon: React.ReactNode; title: string }[] = [
        {
            title: "Rooms",
            icon: <Home {...iconProps} />
        },
        {
            title: "Hostel",
            icon: <Building {...iconProps} />
        },
        {
            title: "Lands",
            icon: <Sprout {...iconProps} />
        },
    ]

    return <View style={styles.container} >
        <Text style={[styles.title, { color: "gray" }]} >Categories</Text>
        <View>
            <FlatList data={categories} horizontal renderItem={({ item: { icon, title } }) => <View style={{ width: 75 }} >
                <View style={[styles.iconContainer, { backgroundColor: offBg }]} >{icon}</View>
                <Text style={{ color: "gray", textAlign: "center" }} >{title}</Text>
            </View>} contentContainerStyle={styles.categoryContainer} />
        </View>
    </View>
};

export default Categories;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 18,
        gap: 12
    },
    title: {
        fontFamily: "Bold",
        fontSize: 16
    },
    iconContainer: {
        padding: 12,
        borderRadius: "50%",
        width: 75,
        height: 75,
        justifyContent: "center",
        alignItems: "center"
    },
    categoryContainer: {
        gap: 12
    }
})