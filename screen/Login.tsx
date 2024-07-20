import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Keyboard,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {Button, TextInput} from 'react-native-paper';
import {
  getCountryByCode,
  PhoneNumberInput,
} from 'react-native-paper-phone-number-input';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    key: 1,
    title: 'Get sample collected from Home ',
    text: 'Book at your convenience',
    image: require('../assets/images/test.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Certified Lab',
    text: 'Report in 6 - 8 hours',
    image: require('../assets/images/lab.jpg'),
    backgroundColor: '#febe29',
  },
];

const RenderItem = ({item}) => {
  return (
    <View style={{...styles.slide, backgroundColor: item.backgroundColor}}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.view}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );
};

export default function Login() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [phoneNumber, setphoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [countryCode, setCountryCode] = useState<string>('IN'); // Default country code
  const {name, flag, dialCode} = getCountryByCode(countryCode); // Get country details
  const navigation = useNavigation();
  // const otpVerified=()={
  //   navigation.replace('tabs');
  // }

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <View style={{height: '100%'}}>
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => <RenderItem item={item} />}
        showDoneButton={false}
        showNextButton={false}
        bottomButton={true}
      />
      <BottomSheet
        ref={bottomSheetModalRef}
        index={1}
        handleComponent={null}
        snapPoints={['30%', '30%']}
        onChange={() => null}>
        <BottomSheetView style={styles.bottomSheet}>
          {!showOtpInput ? (
            <>
              <TextInput
                value={phoneNumber}
                style={styles.phoneInput}
                keyboardType="phone-pad"
                label="Phone Number"
                mode="outlined"
              />
              <Button
                mode="contained"
                style={{marginTop: 20}}
                onPress={() => setShowOtpInput(true)}>
                <Text>Send OTP</Text>
              </Button>
            </>
          ) : (
            <>
              <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    value={digit}
                    onChangeText={value => handleOtpChange(index, value)}
                    style={styles.otpInput}
                    keyboardType="number-pad"
                    textAlign="left"
                    maxLength={1}
                  />
                ))}
              </View>
              <Button
                mode="contained"
                onPress={() => {
                  navigation.navigate('tabs');
                }}
                style={{marginTop: 30}}>
                Verify OTP
              </Button>
            </>
          )}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    // position: 'absolute',
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
    // backgroundColor: 'black',
    // top: '10%',
    textAlign: 'center',
    width: '100%',
  },
  view: {
    width: '90%',
    backgroundColor: 'black',
    opacity: 0.65,
    padding: 20,
    borderRadius: 20,
  },
  text: {
    // position: 'absolute',
    color: 'white',
    fontSize: 25,
    marginTop: 20,
    // backgroundColor: 'black',
    bottom: '10%',
    textAlign: 'center',
  },
  image: {
    width,
    height,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bottomSheet: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 20, // Adjust this value as needed
  },
  phoneInput: {
    width: '100%',
  },
  bottomSheetText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
  },
});
