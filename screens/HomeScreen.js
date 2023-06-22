import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [tezina, setTezina] = useState('lagano');
  const [kategorija, setKategorija] = useState('filmovi');

  const startGame = () => {
    navigation.navigate('Igra', { tezina, kategorija });
  };

  const handleTezinaChange = (novaTezina) => {
    setTezina(novaTezina);
  };

  const handleKategorijaChange = (novaKategorija) => {
    setKategorija(novaKategorija);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tekst}>
        {'Pogodi skrivenu riječ!' +
        '\n Odaberi težinu igre:' +
          '\n LAGANO: 10 života' +
          '\n SREDNJE: 7 života' +
          '\n TEŠKO: 5 života' +
          '\n Odaberi kategoriju: FILMOVI / SERIJE'}
      </Text>
      <View style={styles.tipkeContainer}>
        <Button title="LAGANO" onPress={() => handleTezinaChange('lagano')} />
        <Button title="SREDNJE" onPress={() => handleTezinaChange('srednje')} />
        <Button title="TEŠKO" onPress={() => handleTezinaChange('teško')} />
      </View>
      <View style={styles.tipkeContainer}>
        <Button
          title="FILMOVI"
          onPress={() => handleKategorijaChange('filmovi')}
        />
        <Button
          title="SERIJE"
          onPress={() => handleKategorijaChange('serije')}
        />
      </View>
      {tezina && (
        <View>
          <Text style={styles.tekst}>Odabrana težina: {tezina}</Text>
        </View>
      )}
      {kategorija && (
        <View>
          <Text style={styles.tekst}>Odabrana kategorija: {kategorija}</Text>
        </View>
      )}
      <View>
        <Button title="ZAPOČNI IGRU" onPress={startGame} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
  },
  tekst: {
    color: 'black',
    padding: 20,
    marginTop: 2,
    marginBottom: 20,
    fontSize: 20,
    paddingTop: 0,
    textAlign: 'center',
    fontFamily: 'comfortaa',
    backgroundColor: '#dae7f0',
    borderWidth: 4,
    borderColor: 'white',
    lineHeight: 30,
  },
  tipkeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
