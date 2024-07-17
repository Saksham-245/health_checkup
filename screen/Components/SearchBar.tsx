import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const SearchBar = () => {
  const navigation = useNavigation();
  return (
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
  },
  input: {
    flex: 1,
    color: '#000',
  },
});
