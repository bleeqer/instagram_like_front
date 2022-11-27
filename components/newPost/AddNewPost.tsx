import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import FormikPostUploader from "./FormikPostUploader";

const addNewPost = ({ navigation }) => (
	<View>
		<Header navigation={navigation} />
		<FormikPostUploader />
	</View>
);

const Header = ({ navigation }) => (
	<View style={styles.headerContainer}>
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<Image
				source={require("../../assets/go_back_icon.png")}
				style={{ height: 35, width: 35 }}
			/>
		</TouchableOpacity>
		<Text style={{ fontWeight: "700", fontSize: 20, marginRight: 25 }}>
			NEW POST
		</Text>
		<Text></Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 10,
	},

	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	headerText: {},
});

export default addNewPost;
