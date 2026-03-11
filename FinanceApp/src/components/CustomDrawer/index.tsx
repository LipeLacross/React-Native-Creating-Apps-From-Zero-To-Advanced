import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props: DrawerContentComponentProps) {
  const { user } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.welcomeText}>Bem-vindo</Text>

        <Text style={styles.userName} numberOfLines={1}>
          {user && user.name}
        </Text>
      </View>

      <DrawerItemList {...props} />

      {/* <DrawerItem
        {...props}
        label="Sair do app"
        onPress={ () => signOut() }
      /> */}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  logo: {
    width: 90,
    height: 90,
  },
  welcomeText: {
    fontSize: 18,
    marginTop: 14,
  },
  userName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 14,
    paddingHorizontal: 20,
  },
});
