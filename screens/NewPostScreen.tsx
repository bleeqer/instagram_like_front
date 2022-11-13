import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import AddNewPost from "../components/newPost/AddNewPost";

export default function newPostScreen() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<AddNewPost></AddNewPost>
		</SafeAreaView>
	);
}
