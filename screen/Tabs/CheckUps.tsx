import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Vibration,
  View,
} from 'react-native';
import LocationButton from '../Components/LocationButton';
import SearchBar from '../Components/SearchBar';

const CheckUps = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.searchBar}>
          <LocationButton />
          <SearchBar />
        </View>
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
    elevation: 4,
  },
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 200, // You can adjust the height as needed
  },
});

export default CheckUps;
