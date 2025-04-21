import axios from 'axios';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

interface LocationInfo {
    city: string;
    country: string;
    state: string;
    postcode: string;
    district: string;
    formatted: string
}

const useLocation = () => {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [info, setInfo] = useState<LocationInfo>({
        city: "",
        country: "",
        district: "",
        formatted: "",
        postcode: "",
        state: ""
    });

    async function getCurrentLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg("Permission to access location was denied.");
            return;
        }

        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);

        try {

            const { data } = await axios.get(
                `https://api.geoapify.com/v1/geocode/reverse?lat=${location.coords.latitude}&lon=${location.coords.longitude}&apiKey=${process.env.EXPO_PUBLIC_LOCATION_API_KEY}`
            );

            const { city, country, county, state, postcode, formatted } = data.features[0].properties;
            setInfo({
                city, country, district: county, state, postcode, formatted
            })
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getCurrentLocation();
    }, []);

    return { location, errorMsg, info, getCurrentLocation };

}

export default useLocation;