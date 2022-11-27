import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import LoginScreen from "./screens/LoginScreen";

const stack = createStackNavigator();

const screenOptions = {
	headerShown: false,
};

export default function SignedInStack() {
	return (
		<NavigationContainer>
			<stack.Navigator
				initialRouteName="LoginScreen"
				screenOptions={screenOptions}>
				<stack.Screen
					name="HomeScreen"
					component={HomeScreen}
				/>
				<stack.Screen
					name="NewPostScreen"
					component={NewPostScreen}
				/>
				<stack.Screen
					name="LoginScreen"
					component={LoginScreen}
				/>
			</stack.Navigator>
		</NavigationContainer>
	);
}
