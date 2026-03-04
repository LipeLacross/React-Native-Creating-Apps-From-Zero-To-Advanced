import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

// Componente de drawer extraído para evitar re-criação
const DrawerContent = (props: DrawerContentComponentProps) => <CustomDrawer {...props} />;

function AppRoutes(){
  return(
    <AppDrawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        headerShown:false,

        drawerStyle:{
          backgroundColor: '#FFF',
          paddingTop: 20,
        },

        drawerActiveBackgroundColor:'#3b3dbf',
        drawerActiveTintColor: '#FFF',

        drawerInactiveBackgroundColor: '#F0F2FF',
        drawerInactiveTintColor: '#121212'

      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={Home}
      />

      <AppDrawer.Screen
        name="Registrar"
        component={New}
      />

      <AppDrawer.Screen
        name="Perfil"
        component={Profile}
      />
    </AppDrawer.Navigator>
  )
}

export default AppRoutes;