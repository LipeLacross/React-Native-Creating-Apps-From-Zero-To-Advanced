import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { AuthStackParamList } from './routeTypes';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen 
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle:{
            backgroundColor: '#3b3dbf',
          },
          headerShadowVisible: false,
          headerTintColor: '#FFF',
          headerTitle: 'Voltar',
        }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthRoutes;