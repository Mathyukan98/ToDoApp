import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ThankYouPage = ({ navigation }) => {
  const handleContinue = () => {
    
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thank You for Booking!</Text>
      <Text style={styles.message}>
        Your booking has been confirmed. We look forward to your visit!
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  message: {
    fontSize: 18,
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ThankYouPage;
