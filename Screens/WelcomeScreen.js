import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import Button from '../components/Button';
import COLORS from '../colors/colors';

const WelcomeScreen= ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{ flex: 1 }}>
                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 200,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Wel Come</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Our Hotel</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            marginVertical: 4
                        }}>Welcome to </Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                        }}> our restaurant. Here you can select your rooms and make bookings at any time. 
                        Have a nice day. We always welcome you. You can arrange your food</Text>
                    </View>

                    <Button
                        title="Get Start"
                        onPress={() => navigation.navigate("SignUp")}
                        style={{
                            marginTop: 22,
                            width: "100%"
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default WelcomeScreen