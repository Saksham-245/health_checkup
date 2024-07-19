import React from 'react';
import {Text, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import LocationButton from '../Components/LocationButton';
import SearchBar from '../Components/SearchBar';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import json from '../../assets/images/underConstruction.json';
import {Icon} from 'react-native-vector-icons/Icon';
import UnderConstruction from '../Components/UnderConstruction';

const Test = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.searchBar}>
          <LocationButton />
          <SearchBar />
        </View>
        <UnderConstruction />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    paddingBottom: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    borderRadius: 10,
    // Shadow properties for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Shadow properties for Android
    elevation: 3,
  },
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  image: {
    width: 200,
    height: 200, // You can adjust the height as needed
  },
});

export default Test;
