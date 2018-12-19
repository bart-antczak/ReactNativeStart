import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = props => {
    return (
        <View style={styles.modalContainer}>
            <Image source={props.selectedPlace ? props.selectedPlace.image : null} style={styles.placeImage} />
            <Text style={styles.placeName}>{props.selectedPlace ? props.selectedPlace.name : null}</Text>
            <View>
                {/*<Button title='Delete' color='red' onPress={props.onItemDeleted} />*/}
                <TouchableOpacity onPress={props.onItemDeleted}>
                    <View style={styles.deleteButton}>
                        <Icon size={30} name='ios-trash' color='red' />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28
    },
    deleteButton: {
        alignItems: 'center'
    }
});

export default placeDetail;