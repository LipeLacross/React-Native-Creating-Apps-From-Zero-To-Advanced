import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Result'>;

function formatPrice(value: number): string {
  return value.toFixed(2).replace('.', ',');
}

export default function ResultScreen({ route, navigation }: Props) {
  const { isAlcoholBetter, alcoholPrice, gasPrice } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          source={require('../../assets/gas.png')}
          style={styles.circleIcon}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>
        {isAlcoholBetter ? 'Compensa usar Álcool' : 'Compensa usar Gasolina'}
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Com os preços:</Text>
        <Text style={styles.cardText}>Álcool: R$ {formatPrice(alcoholPrice)}</Text>
        <Text style={styles.cardText}>Gasolina: R$ {formatPrice(gasPrice)}</Text>
      </View>

      <TouchableOpacity style={styles.outlineButton} onPress={() => navigation.goBack()}>
        <Text style={styles.outlineButtonText}>Calcular novamente</Text>
      </TouchableOpacity>
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
    color: '#18d86b',
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 22,
  },
  card: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 18,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  cardText: {
    color: '#dcdcdc',
    fontSize: 15,
    marginBottom: 6,
  },
  outlineButton: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#ff3b30',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  outlineButtonText: {
    color: '#ff3b30',
    fontSize: 14,
    fontWeight: '800',
  },
});

