import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import LocationButton from '../Components/LocationButton';
import SearchBar from '../Components/SearchBar';

const Test = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <LocationButton />
        <SearchBar />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
