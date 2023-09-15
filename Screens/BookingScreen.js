import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity, 
  StyleSheet,
  ScrollView,
} from 'react-native';


const BookingScreen = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [rooms, setRooms] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = () => {

    console.log('Name:', name);
    console.log('Address:', address);
    console.log('Rooms:', rooms);
    console.log('Guests:', guests);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />

      <Text style={styles.label}>Number of Rooms:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the number of rooms"
        value={rooms}
        onChangeText={(text) => setRooms(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Number of Guests:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the number of guests"
        value={guests}
        onChangeText={(text) => setGuests(text)}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.Button} onPress={Thank}>
        <Text style={styles.buttonText}>Book Here</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingScreen;
