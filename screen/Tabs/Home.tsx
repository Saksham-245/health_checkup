import React from 'react';
import {View, Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import LocationButton from '../Components/LocationButton';
import SearchBar from '../Components/SearchBar';
import InfoBanner from '../Components/InfoBanner';
import BannerSlider from '../Components/HomeBannerSlider';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.homeBox}>
          <LocationButton />
          <Image
            style={styles.image}
            source={require('../../assets/images/landing-screen.png')}
          />
          <SearchBar />
        </View>
        <InfoBanner />
        <BannerSlider />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeBox: {
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
    width: '100%',
    height: 200, // You can adjust the height as needed
  },
});

export default Home;
