import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import Images from './Images.tsx';
const {width} = Dimensions.get('window');

interface Banner {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  code: string;
  buttonText: string;
  gradient: any;
  buttonAction: () => void;
}

const BannerSlider = (prop: {data: any}) => {
  const banners = prop.data;
  const renderItem = ({item}: {item: Banner}) => (
    <View>
      <LinearGradient
        colors={[item.gradient[0], item.gradient[1]]}
        style={styles.slide}>
        <Image source={Images[item.image]} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <Text style={styles.code}>{item.code}</Text>
          <TouchableOpacity onPress={item.buttonAction} style={styles.button}>
            <Text style={styles.buttonText}>{item.buttonText}</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );

  return (
    <Carousel
      loop
      width={width}
      mode="parallax"
      height={width / 2}
      autoPlay={true}
      autoPlayInterval={2000}
      data={banners}
      scrollAnimationDuration={1000}
      renderItem={renderItem}
      panGestureHandlerProps={{
        activeOffsetX: [-10, 10], // Adjust these values as needed
        failOffsetY: [-10, 10],
      }}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    display: 'flex',
    margin: 'auto',
    width: '90%',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'orange',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 1,
    marginBottom: 20,
  },
  image: {
    width: '40%',
    height: 150,
    borderRadius: 10,
  },
  textContainer: {
    alignItems: 'center',
    width: '60%',
    margin: 10,
  },
  title: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
  },
  code: {
    fontSize: 16,
    color: '#888',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#00f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BannerSlider;
function alert(arg0: string): void {
  throw new Error('Function not implemented.');
}
