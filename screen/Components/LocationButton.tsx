import React, {useState} from 'react';
import {
  Modal,
  TouchableOpacity,
  Image,
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const locations = ['Delhi - NCR', 'Mumbai', 'Bangalore', 'Chennai'];

const LocationButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Delhi - NCR');

  const handleLocationSelect = (location: React.SetStateAction<string>) => {
    setSelectedLocation(location);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Image
          style={styles.icon}
          source={require('../../assets/images/Icon/locationIcon.png')}
        />
        <Text style={styles.text}>{selectedLocation}</Text>
        <Icon name="chevron-thin-down" size={20} color="grey" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Select City</Text>

            <FlatList
              data={locations}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleLocationSelect(item)}>
                  <Text
                    style={[
                      styles.modalItemText,
                      item == selectedLocation
                        ? {
                            color: 'blue',
                            fontWeight: 'bold',
                            fontSize: 18,
                          }
                        : {fontSize: 15},
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    width: 200,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 4,
    color: 'grey',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalItem: {
    padding: 10,
    width: '100%',
  },
  modalItemText: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LocationButton;
