import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screen/Splash';
import Login from './screen/Login';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
import Home from './screen/Tabs/Home';
import Tabs from './screen/Tabs';
import SearchScreen from './screen/Tabs/SearchScreen';
import Cart from './screen/Cart';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PaperProvider>
        <GestureHandlerRootView>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="splash"
              screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="splash"
                component={Splash}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="tabs" component={Tabs} />
              <Stack.Screen
                name="searchScreen"
                component={SearchScreen}
                options={{
                  headerShown: true,
                  headerTitle: 'Search',
                }}
              />
              <Stack.Screen name="Cart" component={Cart} />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </PaperProvider>
    </SafeAreaView>
  );
}
