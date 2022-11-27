import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'


const Header = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Image
					style={styles.logo}
					source={require("../../assets/header_logo.png")}
				/>
			</TouchableOpacity>

			<View style={styles.iconsContainer}>
				<TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
					<Image
						style={[styles.icon, styles.icon_1]}
						source={require("../../assets/post_icon.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						style={[styles.icon, styles.icon_2]}
						source={require("../../assets/notif_icon.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.unreadBadge}>
						<Text style={styles.unreadBadgeText}>11</Text>
					</View>
					<Image
						style={[styles.icon, styles.icon_3]}
						source={require("../../assets/message_icon.png")}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		marginHorizontal: 10,
	},
	iconsContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	logo: {
		width: 120,
		height: 50,
		resizeMode: "contain",
	},
	icon: {
		resizeMode: "contain",
		marginRight: 5,
	},
	icon_1: {
		width: 30,
		height: 30,
	},
	icon_2: {
		width: 30,
		height: 30,
	},
	icon_3: {
		width: 30,
		height: 30,
	},
	unreadBadge: {
		backgroundColor: "#FF3250",
		position: "absolute",
		left: 15,
		bottom: 16,
		width: 22,
		height: 15,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
		zIndex: 100,
	},
	unreadBadgeText: {
		color: "white",
		fontWeight: "600",
	},
});

export default Header