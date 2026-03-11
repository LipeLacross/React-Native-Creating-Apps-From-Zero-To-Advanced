import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import type { AppDrawerParamList } from '../../routes/routeTypes';

import { Container, Title, ButtonMenu } from './styles';

type HeaderProps = {
  title?: string;
};

export default function Header({ title }: HeaderProps) {
  const navigation = useNavigation<DrawerNavigationProp<AppDrawerParamList>>();

  return (
    <Container>
      <ButtonMenu onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={35} color="#121212" />
      </ButtonMenu>

      {title && <Title>{title}</Title>}
    </Container>
  );
}
