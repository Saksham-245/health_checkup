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
import Carousel, {Pagination} from 'react-native-reanimated-carousel';

const {width} = Dimensions.get('window');

interface Banner {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  code: string;
  buttonText: string;
  buttonAction: () => void;
}

const banners: Banner[] = [
  {
    id: '1',
    image: require('../../assets/images/Family.jpg'),
    title: 'Add a family member',
    subtitle: 'get 30% off',
    code: 'Use Code: FAMILY',
    buttonText: 'Order Now',
    buttonAction: () => alert('Order Now Pressed'),
  },
  {
    id: '2',
    image: require('../../assets/images/Discount.jpg'),
    title: 'Save Money',
    subtitle: 'Get Discount',
    code: 'Use Code: DISCOUNT',
    buttonText: 'Click Here',
    buttonAction: () => alert('Click Here Pressed'),
  },
  // Add more banner objects as needed
];

const BannerSlider: React.FC = () => {
  const renderItem = ({item}: {item: Banner}) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.code}>{item.code}</Text>
        <TouchableOpacity onPress={item.buttonAction} style={styles.button}>
          <Text style={styles.buttonText}>{item.buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <Carousel
      loop
      width={width}
      height={width / 2}
      autoPlay={true}
      data={banners}
      scrollAnimationDuration={1000}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    display: 'flex',
    margin: 'auto',
    width: '95%',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'orange',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 10,
    marginBottom: 20,
  },
  image: {
    width: '45%',
    height: 150,
    borderRadius: 10,
  },
  textContainer: {
    alignItems: 'center',
    width: '45%',
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
