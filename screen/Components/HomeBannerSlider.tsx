import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from './Images';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';


const { width } = Dimensions.get('window');

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
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const colors = [
    "#26292E",
    "#899F9C",
    "#B3C680",
    "#5C6265",
    "#F5D399",
    "#F1F1F1",
  ];

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  const renderItem = ({ item }: { item: Banner }) => (
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
    <View>
      <Carousel
        loop
        ref={ref}
        width={width}
        height={width / 2}
        data={banners}
        pagingEnabled={true}
        autoPlay={true}
        scrollAnimationDuration={1000}
        onProgressChange={progress}
        renderItem={renderItem}
      />
      <Pagination.Basic
        progress={progress}
        data={banners}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5 }}
        onPress={onPressPagination}
      />
    </View>
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
    shadowOffset: { width: 0, height: 2 },
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
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
  inactiveDot: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

export default BannerSlider;