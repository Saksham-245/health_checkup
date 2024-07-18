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

const {width} = Dimensions.get('window');

interface Banner {
  id: string;
  title: string;
  markedPrice: number;
  sellingPrice: number;
  parameter: number;
  reportsTime: number;
  buttonAction: () => void;
}

const CheckUpBannerSlider = (prop: {data: any}) => {
  const banners = prop.data;
  const renderItem = ({item}: {item: Banner}) => (
    <View>
      <View style={styles.slide}>
        <LinearGradient
          colors={['#65aceb', '#4886bd']}
          style={styles.titleTextContainer}>
          <View style={styles.titleText}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View>
            <Text style={styles.subtitle}>₹{item.markedPrice}</Text>
            <Text style={styles.subtitle}>₹{item.sellingPrice}</Text>
            <Text style={styles.subtitle}>
              {Math.floor(
                ((item.markedPrice - item.sellingPrice) * 100) /
                  item.markedPrice,
              )}
              %off
            </Text>
          </View>
        </LinearGradient>
        <View style={styles.textContainer}>
          <Text style={styles.code}>{item.parameter}</Text>

          <Text style={styles.code}>{item.reportsTime}</Text>
          <TouchableOpacity onPress={item.buttonAction} style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <Carousel
      loop
      width={width}
      mode="parallax"
      height={width / 1.5}
      //   autoPlay={true}
      //   autoPlayInterval={2000}
      data={banners}
      //   scrollAnimationDuration={1000}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    display: 'flex',
    // margin: 'auto',
    width: '90%',
    // justifyContent: 'center',
    flexDirection: 'column',
    // backgroundColor: 'orange',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    padding: 1,
    margin: 20,
  },
  titleTextContainer: {
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    display: 'flex',
  },
  titleText: {
    width: '50%',
  },

  textContainer: {
    alignItems: 'center',
    width: '60%',
    margin: 10,
  },
  title: {
    fontSize: 20,
    color: '#FFF',
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

export default CheckUpBannerSlider;
function alert(arg0: string): void {
  throw new Error('Function not implemented.');
}
