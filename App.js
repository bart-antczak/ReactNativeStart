import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  state = {
    placeName: null,
    places: []
  }

  placeNameChangedHandler = (val) => {
    this.setState({
        placeName: val
    })
  }

  placeSubmitHandle = () => {
    if (this.state.placeName.trim() === '') {
        return;
    }
    this.setState(prevState => {
        return {
            places: prevState.places.concat(prevState.placeName)
        };
    });
  }

  render() {
    const placesOutput = this.state.places.map((place,index) => (
        <Text key={index}>{place}</Text>
    ))
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
            /*<Text>{this.state.placeName}</Text>*/
                    <TextInput
                        style={styles.textInput}
                        placeholder='An awesome place'
                        value={this.state.placeName}
                        onChangeText={this.placeNameChangedHandler} />
            <Button style={styles.button} title='Add' onPress={this.placeSubmitHandle} />
        </View>
        <View>
            {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputContainer: {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    textAlign: 'center',
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    //marginRight: 20
  },
  button: {
    height: 40
  }
});
