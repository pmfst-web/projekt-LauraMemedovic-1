import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import Boje from '../constants/Boje'

const Botun = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...stil.tipka, ...props.style}}>
        <Text style={stil.naslov}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  tipka: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: 150,
    height: 35,
    borderRadius: 5,
    opacity: 0.99,
    elevation: 3
  },
  naslov:{
    color: '#9ebdf0',
  }
});

export default Botun;