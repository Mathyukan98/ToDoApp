import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import COLORS from '../colors/colors';
import DetailsScreen from '../Screens/DetailsScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import LoginScreen from '../Screens/LoginScreen';
import BookingScreen from '../Screens/BookingScreen';
import ThankYouPage from '../Screens/ThankYouPage';



const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" options={{headerShown: false}} component={DetailsScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
        <Stack.Screen name="Booking" options={{headerShown: false}} component={BookingScreen} />
        <Stack.Screen name="Thank" options={{headerShown: false}} component={ThankYouPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
