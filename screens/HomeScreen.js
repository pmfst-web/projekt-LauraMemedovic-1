import React from 'react';
import { StyleSheet, View, Button, Text, Image } from 'react-native';
import Boje from '../constants/Boje';

const HomeScreen = ({ navigation }) => {
  const startGame = () => {
    navigation.navigate('Igra');
  };

  return (
    <View style={styles.container}>
      <View style={styles.slikaOkvir}>
        <Image style={styles.slika} source={require('../assets/game2.png')} />
      </View>
      <Text style={styles.tekst}>
        {'Cilj igre je pogoditi skrivenu riječ.'+
        ' \n Imaš 9 pokušaja da pogodiš.'+
        ' \n Svaki put kad upišeš krivo slovo gubiš život.'+
        ' \n Igra je gotova kad pogodiš riječ ili kad izgubiš sve živote.'}
      </Text>
      <View sytle={styles.tipka}>
        <Button title="ZAPOČNI IGRU" onPress={startGame} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slika: {
    width: 350,
    height: 100,
    flex: 1,
  },
  slikaOkvir: {
    overflow: 'hidden',
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginVertical: 10,
  },
  tekst: {
    color: 'black',
    padding: 20,
    marginTop: 2,
    fontSize: 20,
    paddingTop: 0,
    textAlign: 'center',
    fontFamily: 'comfortaa',
    backgroundColor: '#9ebdf0',
    borderWidth: 4,
    borderColor: 'white',
    lineHeight: 30,
  },
  tipka: {
    padding: 10,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#9ebdf0',
    marginTop: 25,
  },
});

export default HomeScreen;
