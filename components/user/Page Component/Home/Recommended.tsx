import { Text, View } from "@/components/Themed"
import RecommendedCard from "./RecommendedCard";
import { StyleSheet } from "react-native";
import { useLocation } from "@/hooks";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { api } from "@/constants/api";
import { getItemAsync } from 'expo-secure-store'
import { Room } from "@/constants/type";

const Recommended: React.FC = () => {
    const { errorMsg, location, info, getCurrentLocation } = useLocation();

    useEffect(() => {
        if (!info.city) {
            getCurrentLocation();
        }
    }, []);

    const { data: room } = useQuery({
        queryKey: ['recommended-rooms'],
        queryFn: async () => {
            const { data } = await axios.get(api + "recommend-room", {
                headers: {
                    Authorization: "Bearer " + await getItemAsync("token")
                }
            })
            return data.room as Room;
        }
    })

    return <View style={styles.container}>
        <Text style={[styles.title, { color: "gray" }]} >Recommendations</Text>
        {room && <RecommendedCard address={room?.info.address} city={room?.info.city} id={room?.id} img={room?.info.imgs[0]} />}
    </View>
}

export default Recommended;

const styles = StyleSheet.create({
    container: {
        width: "100%",
    
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