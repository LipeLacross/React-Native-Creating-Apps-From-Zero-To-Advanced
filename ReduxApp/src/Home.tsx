import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from './navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor="#CCCCCC"
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Fazer Login</Text>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor="#CCCCCC"
        style={styles.button}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 8,
    width: 250,
    borderRadius: 3,
    marginBottom: 5,
  },
});

export default Home;

