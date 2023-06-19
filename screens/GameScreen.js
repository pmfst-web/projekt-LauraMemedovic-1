import React, { useState, useReducer, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView,} from 'react-native';
import { pogodiSlovo, startGame} from '../store/actions/gameActions';
import gameReducer from '../store/reducers/gameReducer';

const pocetnoStanje = {
  skrivenaRijec: '',
  pogodenaRijec: '',
  zivoti: 10, // broj života
  krivaSlova: [], // niz pogrešnih slova
};

const GameScreen = ({ navigation, route }) => {
  const [state, dispatch] = useReducer(gameReducer, pocetnoStanje);
  const { skrivenaRijec, pogodenaRijec, zivoti, gameStatus, krivaSlova } = state;
  const [inputValue, setInputValue] = useState('');
  const { tezina, kategorija } = route.params; // dohvaća odabranu tezinu i kategoriju sa HomeScreen

  useEffect(() => {
    handleNewGame();
  }, []); //pokrece se samo jednom na pocetku

  const handleGuess = () => {
    //funkciji za provjeru slova se salje vrijednost inputa
    dispatch(pogodiSlovo(inputValue.toUpperCase()));
    setInputValue(''); 
  };

  const handleNewGame = () => {
    let brojZivota = 10; 
    let odabranaKategorija = 'filmovi';

    if (tezina === 'srednje') {
      brojZivota = 7;
    } else if (tezina === 'teško') {
      brojZivota = 5;
    }

    if (kategorija === 'filmovi') {
      odabranaKategorija = 'filmovi';
    } else if (kategorija === 'serije') {
      odabranaKategorija = 'serije';
    }

    dispatch(startGame(brojZivota, odabranaKategorija)); //prijenos broja zivota i odabrane kategorije
  };

  const renderGameStatusMessage = () => {
    if (gameStatus === 'pobjeda' || gameStatus === 'gubitak') {
      navigation.navigate('Kraj', { gameStatus, skrivenaRijec }); // Prijelaz na ekran za kraj igre
      return null; // Ne prikazuje nista na trenutnom ekranu
    } else {
      return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>
              Skrivena riječ:{' '}
              {pogodenaRijec || '_'.repeat(skrivenaRijec.length)}
            </Text>
            <Text style={styles.text}>Broj života: {zivoti}</Text>
            <Text style={styles.text}>
              Pogrešna slova: {krivaSlova.join(', ')}
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                const filteredText = text.replace(/[^a-zA-ZčćžšđČĆŽŠĐ]/g, '');
                setInputValue(filteredText.charAt(0));
              }}
              maxLength={1} //ogranicen input na jedno slovo
              value={inputValue} //postavljanje input vrijednosti
            />
            <View style={styles.buttonContainer}>
              <Button title="POGODI" onPress={handleGuess} />
            </View>
          </View>
        </ScrollView>
      );
    }
  };

  return <View style={styles.container}>{renderGameStatusMessage()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  contentContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
    letterSpacing: 3,
    flexWrap: 'wrap',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    width: 200,
    marginTop: 20,
  },
});

export default GameScreen;
