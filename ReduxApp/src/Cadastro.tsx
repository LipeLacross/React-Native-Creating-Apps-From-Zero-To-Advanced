import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { editEmail, editSenha } from './actions/AuthActions';
import type { RootState } from './Reducers';
import type { RootStackParamList } from './navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;

const Cadastro = (_props: Props) => {
  const dispatch = useDispatch();
  const { email, senha } = useSelector((state: RootState) => state.auth);

  const handleCadastro = () => {
    // Fluxo de cadastro pode ser implementado depois.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        value={email}
        underlineColorAndroid="transparent"
        style={styles.input}
        onChangeText={(text) => dispatch(editEmail(text))}
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        value={senha}
        underlineColorAndroid="transparent"
        secureTextEntry
        style={styles.input}
        onChangeText={(text) => dispatch(editSenha(text))}
      />

      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#000000',
    fontSize: 24,
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: '#CCCCCC',
    padding: 5,
    width: 250,
    marginBottom: 10,
  },
});

export default Cadastro;

