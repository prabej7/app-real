import { Text, View } from "@/components/Themed"
import { Image } from "tamagui";
import { StyleSheet } from "react-native";

interface Props {
    title: string;
    subTitle: string;
    img: string;
    id: string;
}

const PropertyCard: React.FC<Props> = ({ id, img, title, subTitle }) => {
    return <View style={styles.card}>
        <Image
            source={{ uri: img }}
            height={200}
            borderRadius={12}
        />
        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    </View>

};

export default PropertyCard;

const styles = StyleSheet.create({
    card: {
        width: 260, 
        marginRight: 12,
        position: "relative", 
    },
    title: {
        fontFamily: "Bold",
        fontSize: 20,
        color: "#fff",
        textShadowColor: "rgba(0, 0, 0, 0.5)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
    },
    subTitle: {
        color: "#fff",
        fontSize: 14,
        marginTop: 4,
    },
    info: {
        position: "absolute",
        bottom: 16,
        left: 16,
        backgroundColor:"transparent"
    },
});
