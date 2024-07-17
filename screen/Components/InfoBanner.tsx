import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign'; // Use the appropriate icon library

const InfoBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoItem}>
        <AntDesign name="checkcircle" size={24} color="#888" />
        <Text style={styles.title}>In-house labs</Text>
        <Text style={styles.subtitle}>NABL certified</Text>
      </View>
      <View style={styles.infoItem}>
        <AntDesign name="clockcircle" size={24} color="#888" />
        <Text style={styles.title}>60 mins collection</Text>
        <Text style={styles.subtitle}>6 AM - 10 PM</Text>
      </View>
      <View style={styles.infoItem}>
        <FontAwesome5 name="file-medical-alt" size={24} color="#888" />
        <Text style={styles.title}>Reports in</Text>
        <Text style={styles.subtitle}>6 hours</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
    marginVertical: 30,
    padding: 10,
  },
  infoItem: {
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    marginTop: 4,
    color: '#000',
  },
  subtitle: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default InfoBanner;
