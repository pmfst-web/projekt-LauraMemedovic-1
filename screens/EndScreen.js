import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EndScreen = ({ route, navigation }) => {
  const { gameStatus, skrivenaRijec } = route.params;

  const handleNewGame = () => {
    navigation.navigate('Pravila'); //prijelaz na pocetni ekran
  };

  return (
    <View style={styles.container}>
      {gameStatus === 'pobjeda' ? (
        <>
          <Text style={styles.text}>Bravo! Pogodili ste skrivenu riječ!</Text>
          <Text style={styles.text}>Tražena riječ: {skrivenaRijec}</Text>
        </>
      ) : (
        <>
          <Text style={styles.text}>Igra izgubljena!</Text>
          <Text style={styles.text}>Skrivena riječ: {skrivenaRijec}</Text>
        </>
      )}
      <View style={styles.buttonContainer}>
        <Button title="NOVA IGRA" onPress={handleNewGame} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
    letterSpacing: 3,
    flexWrap: 'wrap',
  },
  buttonContainer: {
    width: 200,
    marginTop: 20,
  },
});

export default EndScreen;
