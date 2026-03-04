import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Cart from '../pages/Cart';

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitle: 'Meu Carrinho'
        }}
      />
    </Stack.Navigator>
  );
}

