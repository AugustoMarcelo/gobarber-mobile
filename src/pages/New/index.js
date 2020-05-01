import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';

import SelectProvider from './SelectProvider';
import SelectDateTime from './SelectDateTime';
import Confirm from './Confirm';

const Stack = createStackNavigator();

export default function NewRoutes({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerLeftContainerStyle: {
          marginLeft: 10,
          alignItems: 'center',
        },
      }}
    >
      <Stack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={{ title: 'Selecione o provedor' }}
      />
      <Stack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={{
          title: 'Selecione o horário',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('SelectProvider')}
            >
              <Icon name="keyboard-arrow-left" size={28} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          title: 'Confirmar agendamento',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('SelectDateTime')}
            >
              <Icon name="keyboard-arrow-left" size={28} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

NewRoutes.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};
