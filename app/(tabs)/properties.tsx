import { Text, View } from "@/components/Themed"
import { Header } from "@/components/user";
import { RecommendedCard } from "@/components/user/Page Component/Home";
import PropertyCard from "@/components/user/Page Component/Home/PropertyCard";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { RootState } from "@/store/store";
import { fetchRoom } from "@/store/thunks/roomThunk";
import { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Properties: React.FC = () => {
    const rooms = useAppSelector((state: RootState) => state.rooms);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchRoom());
    }, []);

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <View style={styles.container}>
                <Header title="Properties" />
                <FlatList 
                    data={rooms} 
                    renderItem={({ item: { info: { address, city, imgs }, id } }) => (
                        <RecommendedCard 
                            address={address} 
                            img={imgs[0]} 
                            city={city} 
                            id={id} 
                        
                        />
                    )}
                    contentContainerStyle={styles.listContent}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};

export default Properties;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 16, 
    },
    listContent: {
        paddingTop: 12,       
        paddingBottom: 20,    
    },
    separator: {
        height: 12,          
    },

});