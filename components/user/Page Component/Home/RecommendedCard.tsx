import { Text, View } from "@/components/Themed";
import { primary } from "@/constants/Colors";
import { Pressable, StyleSheet } from "react-native";
import { Image } from "tamagui";
import Sheet from "../../Sheet";
import { useState } from "react";

interface Props {
    img: string;
    address: string;
    city: string;
    id: string;
}

const RecommendedCard: React.FC<Props> = ({ address, city, id, img }) => {
    const [open, setOpen] = useState<boolean>(false);

    const onPress = () => {
        setOpen(true);
    }
    return (
        <Pressable style={styles.container} onPress={onPress} >
            <Sheet open={open} onClose={() => setOpen(false)} snapPoints={[0.75]}   >
                <View style={{}} >
                    <Text>Hello</Text>
                </View>
            </Sheet>
            {img && (
                <Image
                    source={{ uri: img }}
                    style={styles.image}
                />
            )}

            <View style={styles.info}>
                <View>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                        {address}
                    </Text>
                    <Text style={styles.subtitle}>{city}</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.description} numberOfLines={2}>
                        Take a look at this property – it might be just what you're looking for!
                    </Text>
                    <Text style={styles.cta} onPress={onPress}  >Book now</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default RecommendedCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 12,
        paddingVertical: 6,
        gap: 16,
        width: "100%",
        marginVertical: 12
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    info: {
        flex: 1,
        gap: 8,
    },
    title: {
        fontFamily: "Bold",
        fontSize: 17,

    },
    subtitle: {
        fontSize: 15,
        color: "gray",
    },
    description: {
        fontSize: 13,
        color: "gray",
        lineHeight: 18,
    },
    cta: {
        fontSize: 15,
        color: primary,
        fontWeight: "500",
        marginTop: 4,
    },
    footer: {
        marginTop: 4,
    },
});