import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Modal,TouchableOpacity } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import * as LocationMap from 'expo-location';
import SendModal from '../../components/SendModal';

export const Location = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const getCurrentLocation = async () => {
        let { status } = await LocationMap.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permissão de localização negada');
            return;
        }
        let currentLocation = await LocationMap.getCurrentPositionAsync({});
        setLocation(currentLocation);
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    const initialRegion = {
        latitude: location ? location.coords.latitude : -28.265133,
        longitude: location ? location.coords.longitude : -28.265133,
        latitudeDelta: -28.265133,
        longitudeDelta: -28.265133,
    };

    return (
        <View style={styles.container}>
            <Modal
                visible={openModal}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setOpenModal(false)}
            >
             
                <SendModal />
                <TouchableOpacity style = {styles.close} onPress= { () => setOpenModal(false)}></TouchableOpacity>
            </Modal>

            <MapView
                style={styles.map}
                region={initialRegion}
                showsUserLocation={true}
                followsUserLocation={true}
            >
                {location && (
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title="Você está aqui"
                    />
                )}
            </MapView>

            <View style={styles.buttonOverlay}>
                <Text style={styles.textTitle}>Onde fica seu bar?</Text>
            </View>

            <View style={styles.nav}>
                <TouchableHighlight style={styles.touch}>
                    <Text style={styles.navText} onPress={() => navigation.navigate('selectyourimage')}>Voltar</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{ left: 15 }}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => setOpenModal(true)}>Avançar</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    buttonOverlay: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 128,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.40)',
        elevation: 1,
    },
    textTitle: {
        fontSize: 23,
        fontWeight: 'bold',
    },
    nav: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        height: 75,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        gap: 150,
        elevation: 30,
    },
    button: {
        backgroundColor: 'black',
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    navText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    touch: {
        alignItems: 'center',
    },
    close : {
      position: 'absolute',
      width:270,
     height: 60,
      marginTop: 485,
      marginLeft: 60
    }
});

export default Location;
