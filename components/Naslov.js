import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Naslov = (props) => {
  return (
    <View style={stil.header}>
      <Text style={stil.naslov}>{props.naslov}</Text>
    </View>
  );
};
const stil = StyleSheet.create({
  header: {
    width: '100%',
    paddingTop: 20,
    backgroundColor: '#9ebdf0',
    alignItems: 'center',
  },
  naslov: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'comfortaa',
    fontWeight: 'bold',
  },
});

export default Naslov;