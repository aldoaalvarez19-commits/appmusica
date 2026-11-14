# import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importación de las 3 pantallas
import PrincipalScreen from './screens/PrincipalScreen';
import BuscadorScreen from './screens/BuscadorScreen';
import BibliotecaScreen from './screens/BibliotecaScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#181818',
            borderTopColor: '#282828',
            height: 60,
            paddingBottom: 8,
            paddingTop: 5,
          },
          tabBarActiveTintColor: '#1DB954', // Verde estilo música
          tabBarInactiveTintColor: '#B3B3B3',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Principal') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Buscador') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Biblioteca') {
              iconName = focused ? 'library' : 'library-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Principal" component={PrincipalScreen} />
        <Tab.Screen name="Buscador" component={BuscadorScreen} />
        <Tab.Screen name="Biblioteca" component={BibliotecaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
              }
