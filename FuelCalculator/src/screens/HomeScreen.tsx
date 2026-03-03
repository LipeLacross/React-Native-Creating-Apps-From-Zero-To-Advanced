import React, { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function parsePrice(value: string): number {
  const normalized = value.replace(',', '.').trim();
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : Number.NaN;
}

export default function HomeScreen({ navigation }: Props) {
  const [alcohol, setAlcohol] = useState('4.60');
  const [gas, setGas] = useState('7.30');

  const handleCalculate = () => {
    const alcoholPrice = parsePrice(alcohol);
    const gasPrice = parsePrice(gas);

    if (!Number.isFinite(alcoholPrice) || !Number.isFinite(gasPrice)) {
      Alert.alert('Valores inválidos', 'Preencha os dois campos com números válidos.');
      return;
    }
    if (alcoholPrice <= 0 || gasPrice <= 0) {
      Alert.alert('Valores inválidos', 'Os preços devem ser maiores que zero.');
      return;
    }

    const isAlcoholBetter = alcoholPrice / gasPrice <= 0.7;

    navigation.navigate('Result', {
      isAlcoholBetter,
      alcoholPrice,
      gasPrice,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.circleIcon}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Qual melhor opção?</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Álcool (preço por litro):</Text>
        <TextInput
          value={alcohol}
          onChangeText={setAlcohol}
          style={styles.input}
          keyboardType="numeric"
          inputMode="decimal"
          placeholder="Ex: 4,60"
          placeholderTextColor="#9a9a9a"
        />

        <Text style={styles.label}>Gasolina (preço por litro):</Text>
        <TextInput
          value={gas}
          onChangeText={setGas}
          style={styles.input}
          keyboardType="numeric"
          inputMode="decimal"
          placeholder="Ex: 7,30"
          placeholderTextColor="#9a9a9a"
        />

        <TouchableOpacity style={styles.button} onPress={handleCalculate}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  circleIcon: {
    width: 200,
    height: 110,
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 28,
  },
  form: {
    width: '100%',
  },
  label: {
    color: '#dcdcdc',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 18,
    fontSize: 16,
    color: '#151515',
  },
  button: {
    backgroundColor: '#ff3b30',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
  },
});

