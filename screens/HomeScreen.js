import React, {useState} from 'react';
import { StyleSheet, View, Button, Text, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [tezina, setTezina] = useState('lagano');

  const startGame = () => {
    navigation.navigate('Igra', {tezina});
  };

  const handleTezinaChange = (novaTezina) => {
    setTezina(novaTezina);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tekst}>
        {'Cilj igre je pogoditi skrivenu riječ.'+
        ' \n Odaberi težinu igre:'+
        '\n LAGANO: 10 života' +
        '\n SREDNJE: 7 života' +
        '\n TEŠKO: 5 života' +
        ' \n Svaki put kad upišeš krivo slovo gubiš život.'+
        ' \n Igra je gotova kad pogodiš riječ ili kad izgubiš sve živote.'}
      </Text>
      <View style={styles.tipkeContainer}>
        <Button title="LAGANO" onPress={() => handleTezinaChange('lagano')} />
        <Button title="SREDNJE" onPress={() => handleTezinaChange('srednje')} />
        <Button title="TEŠKO" onPress={() => handleTezinaChange('teško')} />
      </View>
      {tezina && (
      <View>
        <Text style={styles.tekst}>
          Odabrana težina: {tezina}
        </Text>
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
    marginTop: 25,
    marginBottom: 25,
  },
});

export default HomeScreen;
