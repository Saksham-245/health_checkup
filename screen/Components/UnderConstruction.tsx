import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const UnderConstruction = () => {
  return (
    // <View>
    <LinearGradient
      colors={['#0f0c29', '#302b63', '#24243e']}
      style={{
        height: '100%',
        justifyContent: 'center',
        // display: 'flex',
      }}>
      {/* <Icon></Icon> */}
      <Text
        style={{
          color: '#FFF',
          textAlign: 'center',
          fontSize: 25,
        }}>
        COMING SOON
      </Text>
      <Text style={{color: '#FFF', textAlign: 'center', fontSize: 16}}>
        App is under construction
      </Text>
    </LinearGradient>
    // </View>
  );
};

export default UnderConstruction;
