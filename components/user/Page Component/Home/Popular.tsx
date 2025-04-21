import { Text, View } from "@/components/Themed"
import { useDevTheme } from "@/hooks";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import PropertyCard from "./PropertyCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { api } from "@/constants/api";
import { getItemAsync } from 'expo-secure-store'
import { Room } from "@/constants/type"
import { primary } from "@/constants/Colors";
const Popular: React.FC = () => {

    const { data: rooms, isLoading, isError } = useQuery({
        queryKey: ['popularRooms'],
        queryFn: async () => {
            const { data } = await axios.get(api + "popular-rooms", {
                headers: {
                    Authorization: "Bearer " + await getItemAsync("token")
                }
            });
            return data.rooms as Room[];
        }
    });

    return <View style={styles.container} >
        <Text style={[styles.title, { color: "gray" }]} >Popular Properties</Text>
        {isLoading ?
            <View>
                <ActivityIndicator size="large" color={primary} />
            </View>
            :
            <View>
                <FlatList
                    data={rooms}
                    renderItem={({ item }) => <PropertyCard img={item.info.imgs[0]} id={item.id} subTitle={item.info.city} title={item.info.address} />}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap: 12 }}
                />
            </View>}
    </View>
};

export default Popular;

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
        width: 50,
        height: 50
    },
})