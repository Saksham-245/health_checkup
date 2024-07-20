import React, { useEffect, useRef } from 'react';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LocationButton from '../Components/LocationButton';
import SearchBar from '../Components/SearchBar';
import InfoBanner from '../Components/InfoBanner';
import BannerSlider from '../Components/HomeBannerSlider';
import homeBannerData from '../../json/homeBannerSlider.json';
import CheckUpBannerSlider from '../Components/CheckUpBannerSlider';
import CheckUpBannerData from '../../json/checkupBannerSlider.json';
import BottomSheet from '@gorhom/bottom-sheet';

const Home = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    if (CheckUpBannerData.length > 0) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();

    }
  }, [CheckUpBannerData]);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={[styles.scrollViewContent, {paddingBottom: Dimensions.get('window').height * 0.1}]}>
        <View style={styles.homeBox}>
          <LocationButton />
          <Image
            style={styles.image}
            source={require('../../assets/images/landing-screen.png')}
          />
          <SearchBar />
        </View>
        <InfoBanner />
        <BannerSlider data={homeBannerData} />
        <CheckUpBannerSlider data={CheckUpBannerData} bottomSheetRef={bottomSheetRef} />
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
