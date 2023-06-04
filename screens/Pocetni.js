import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import Botun from '../components/Botun'

const Pocetni = ({ navigation }) => {
  return (
    <ScrollView vertical={true} style={stil.ekran}>
      <View style={stil.kontrole}>
        <Botun
          title="ZAPOČNI IGRU"
          onPress={() => navigation.navigate('Popis')}
        />
      </View>
    </ScrollView>
  );
};

const stil = StyleSheet.create({
  ekran: {    
    alignItems: 'center',
    justifyContent: 'center'
  },
  kontrole:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    height: 100
  }
});

export default Pocetni;
