import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../routes/routeTypes';

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
  const { signUp, loadingAuth } = useContext(AuthContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList, 'SignUp'>>();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignUp() {
    if (nome === '' || email === '' || password === '') return;

    const created = await signUp(email, password, nome);
    if (created) {
      navigation.goBack();
    }
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <AreaInput>
          <Input
            placeholder="Nome"
            value={nome}
            onChangeText={(text: string) => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Seu email"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua senha"
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Cadastrar</SubmitText>
          )}
        </SubmitButton>
      </Container>
    </Background>
  );
}
