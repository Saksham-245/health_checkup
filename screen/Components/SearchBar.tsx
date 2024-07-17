import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const SearchBar = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => navigation.navigate('searchScreen')}>
        <TextInput
          placeholder="Search for tests or checkups"
          placeholderTextColor="#888"
          style={styles.input}
          editable={false}
        />
        <Icon name="search" size={24} color="#888" />
      </TouchableOpacity>
      <Text style={styles.promoText}>
        Get <Text style={styles.promoHighlight}>15% OFF</Text> | Use{' '}
        <Text style={styles.promoHighlight}>DISCOUNT15</Text>
      </Text>
    </View>
  );
};

export default SearchBar;
const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFA500', // Orange border
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
    marginBottom: 0,
  },
  input: {
    flex: 1,
    color: '#000',
  },
  promoText: {
    textAlign: 'center',
    // marginTop: 5,
    fontSize: 14,
    backgroundColor: '#e8e5dc',
    padding: 5,
    marginLeft: 45,
    marginRight: 45,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,

    color: '#000',
  },
  promoHighlight: {
    color: '#FFA500', // Orange color
    fontWeight: 'bold',
  },
});
