import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';

const Records = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}></ScrollView>
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
    width: '100%',
    height: 200, // You can adjust the height as needed
  },
});

export default Records;
