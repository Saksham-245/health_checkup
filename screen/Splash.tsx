import {View, Text, Image} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';
import json from '../assets/splash_icon/splash_icon.json';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Splash() {
  const navigation = useNavigation();
  const animation = useRef();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('tabs'); // Ensure 'Login' is the correct route name
    }, 3000);
  }, [navigation]);

  return (
    <View
      style={{
        backgroundColor: 'orange',
        height: '100%',
      }}>
      <LottieView
        style={{width: '100%', height: '100%'}}
        source={json}
        autoPlay
      />
    </View>
  );
}
