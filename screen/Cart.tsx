import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';

export default function Cart({ navigation }: any) {
    const route = useRoute();
    let { selectedItems } = route.params;

    const [fullName, setFullName] = useState('Saksham Mathur');
    const [age, setAge] = useState('25');
    const [gender, setGender] = useState('Male');

    const handleRemove = (id: string) => {
        const updatedItems = selectedItems.filter((item: any) => item.id !== id);
        selectedItems = updatedItems;
    };

    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.itemContainer}>
            <View>
            <Text style={styles.itemTitle}>
                {item.title}</Text>
            <Text style={styles.itemPrice}>{item.sellingPrice}</Text>
            </View>
            <TouchableOpacity style={styles.removeButton} onPress={() => handleRemove(item.id)}>
                <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'white', padding: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.header}>Who is getting tested?</Text>
            <View style={styles.memberContainer}>
                <Text style={styles.memberTitle}>Testing for myself</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={fullName}
                        onChangeText={setFullName}
                        placeholder="Full name"
                    />
                    <TextInput
                        style={styles.input}
                        value={age}
                        onChangeText={setAge}
                        placeholder="Age"
                        keyboardType="numeric"
                    />
                    <View style={styles.genderContainer}>
                        <TouchableOpacity onPress={() => setGender('Male')}>
                            <Text style={gender === 'Male' ? styles.selectedGender : styles.gender}>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setGender('Female')}>
                            <Text style={gender === 'Female' ? styles.selectedGender : styles.gender}>Female</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.itemTitle}>Tests / Checkups added</Text>
                <FlatList
                    data={selectedItems}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'gray'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    memberContainer: {
        backgroundColor: 'white',
        marginHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 5,
    },
    memberTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        opacity: 0.8,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    inputContainer: {
        paddingHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    gender: {
        fontSize: 16,
        color: 'gray',
    },
    selectedGender: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemTitle: {
        fontSize: 16,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    removeButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
    },
    removeButtonText: {
        color: '#fff',
    },
    addButton: {
        backgroundColor: '#00f',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    removeMemberButton: {
        backgroundColor: '#ccc',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    removeMemberButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});