import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
const Maps = () => {
    const [coords, setCoords] = useState([])
    const getLocation = () => {
        Geolocation.getCurrentPosition((data) =>setCoords(data.coords))
    }
    useEffect(() => {
        getLocation();
    }, [])
    return (
        <View style={{flex:1}}>
            <MapView
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                }}
                style={{ height: '100%', width: '100%' }}
            >
                <Marker
                    coordinate={{ latitude: coords.latitude, longitude: coords.longitude }}
                    description={'Current Location'}
                    title={'Location'}
                />
            </MapView>
        </View>

    )
}

export default Maps

const styles = StyleSheet.create({})