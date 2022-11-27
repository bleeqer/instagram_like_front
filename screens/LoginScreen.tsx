import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const INSTAGRAM_LOGO = require("../assets/instagram_logo.png");

export default function LoginScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					source={INSTAGRAM_LOGO}
					style={{ height: 100, width: 100 }}></Image>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 50,
		paddingHorizontal: 12,
	},
	logoContainer: {
		alignItems: "center",
		marginTop: 60,
	},
});
