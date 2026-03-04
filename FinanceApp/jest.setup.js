/* eslint-env jest */
import 'react-native-gesture-handler/jestSetup';
import React from 'react';
import { View } from 'react-native';

jest.mock('react-native-reanimated', () => ({
  __esModule: true,
  default: {
    createAnimatedComponent: (Component) => Component,
    View,
  },
  useSharedValue: (value) => ({ value }),
  useAnimatedStyle: () => ({}),
  withTiming: (value) => value,
  withSpring: (value) => value,
  runOnJS: (fn) => fn,
}));

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: ({ children }) => React.createElement(React.Fragment, null, children),
    Screen: ({ component: Component }) => (Component ? React.createElement(Component) : null),
  }),
}));

jest.mock('@react-navigation/drawer', () => ({
  createDrawerNavigator: () => ({
    Navigator: ({ children }) => React.createElement(React.Fragment, null, children),
    Screen: ({ component: Component }) => (Component ? React.createElement(Component) : null),
  }),
}));

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
