import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {width} = Dimensions.get('window');

interface Banner {
  id: string;
  title: string;
  markedPrice: number;
  sellingPrice: number;
  parameter: number;
  reportsTime: number;
  buttonAction: string;
}

const CheckUpBannerSlider = (prop: {data: any}) => {
  const banners = prop.data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const renderItem = ({item}: {item: Banner}) => (
    <View>
      <View style={styles.slide}>
        <LinearGradient
          colors={['#65aceb', '#4886bd']}
          style={styles.titleTextContainer}>
          <View style={styles.titleText}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.tag}>CHECKUP</Text>
            <View style={styles.price}>
              <Text style={(styles.subtitle, styles.markedPrice)}>
                ₹{item.markedPrice}
              </Text>
              <Text style={styles.subtitle}>₹{item.sellingPrice}</Text>
            </View>
            <View style={styles.discountPercentage}>
              <Text style={styles.subtitle}>
                {Math.floor(
                  ((item.markedPrice - item.sellingPrice) * 100) /
                    item.markedPrice,
                )}
                %off
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View style={{padding: 6}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
              <FontAwesome5
                style={{padding: 5}}
                name="dna"
                size={30}></FontAwesome5>
              <View style={{padding: 1}}>
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                  {item.parameter + ' parameters'}
                </Text>
                <Text style={{color: 'grey'}}>Included</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
              <FontAwesome5
                style={{padding: 5, color: 'grey'}}
                name="file-medical-alt"
                size={30}></FontAwesome5>
              <View>
                <Text style={{color: 'grey'}}>Reports within</Text>
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                  {item.reportsTime + ' Hours'}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(item.buttonAction);
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <Carousel
        width={width}
        mode="parallax"
        height={width / 1.7}
        onSnapToItem={index => setCurrentIndex(index)}
        //   autoPlay={true}
        //   autoPlayInterval={2000}
        data={banners}
        //   scrollAnimationDuration={1000}
        renderItem={renderItem}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10], // Adjust these values as needed
          failOffsetY: [-10, 10],
        }}
      />
      <Pagination data={banners} currentIndex={currentIndex} />
    </View>
  );
};
const Pagination = ({data, currentIndex}) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => (
        <PaginationDot key={index} active={index === currentIndex} />
      ))}
    </View>
  );
};
const PaginationDot = ({active}) => {
  const animatedScale = useSharedValue(1);
  const animatedOpacity = useSharedValue(0.5);

  if (active) {
    animatedScale.value = withTiming(1.5, {
      duration: 1, // Reduced duration for quicker animation
      easing: Easing.out(Easing.exp),
    });
    animatedOpacity.value = withTiming(1, {
      duration: 1, // Reduced duration for quicker animation
      easing: Easing.out(Easing.exp),
    });
  } else {
    animatedScale.value = withTiming(1, {
      duration: 1, // Reduced duration for quicker animation
      easing: Easing.out(Easing.exp),
    });
    animatedOpacity.value = withTiming(0.5, {
      duration: 1, // Reduced duration for quicker animation
      easing: Easing.out(Easing.exp),
    });
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: animatedScale.value}],
      opacity: animatedOpacity.value,
    };
  });

  return <Animated.View style={[styles.paginationDot, animatedStyle]} />;
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
  title: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  tag: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    backgroundColor: '#4886bd',
    fontWeight: '900',
    marginLeft: '40%',
    padding: 5,
    borderRadius: 15,
  },
  subtitle: {
    fontSize: 20,
    color: '#FFF',
  },
  price: {
    flexDirection: 'row',
    padding: 5,
    marginLeft: '20%',
    justifyContent: 'space-between',
  },
  priceContainer: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  markedPrice: {
    textDecorationLine: 'line-through',
    fontSize: 18,
    color: '#FFF',
  },
  discountPercentage: {
    justifyContent: 'flex-end',
    marginLeft: '50%',
    backgroundColor: 'orange',
    padding: 5,
    fontWeight: 'bold',
    borderRadius: 10,
    width: 80,
  },
  parameterContainer: {
    flexDirection: 'row',
  },
  reportTimeContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#00f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
    width: '45%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  paginationContainer: {
    flexDirection: 'row',
    // marginTop: 20,
    justifyContent: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
});

export default CheckUpBannerSlider;
function alert(arg0: string): void {
  throw new Error('Function not implemented.');
}
