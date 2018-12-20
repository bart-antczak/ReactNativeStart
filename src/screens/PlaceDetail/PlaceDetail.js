import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from "react-native-navigation";

import { deletePlace } from '../../store/actions/index';

import Icon from 'react-native-vector-icons/Ionicons';

class PlaceDetail extends Component {

    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        /* TODO: poprawić przekierowanie screen wstecz */
        Navigation.pop(this.props.FindPlace);
    };

    render() {
        return (
            <View style={styles.modalContainer}>
                <Image source={this.props.selectedPlace ? this.props.selectedPlace.image : null} style={styles.placeImage} />
                <Text style={styles.placeName}>{this.props.selectedPlace ? this.props.selectedPlace.name : null}</Text>
                <View>
                    {/*<Button title='Delete' color='red' onPress={props.onItemDeleted} />*/}
                    <TouchableOpacity onPress={this.placeDeletedHandler}>
                        <View style={styles.deleteButton}>
                            <Icon size={30} name='ios-trash' color='red' />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

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

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    }
};

export default connect(null, mapDispatchToProps)(PlaceDetail);