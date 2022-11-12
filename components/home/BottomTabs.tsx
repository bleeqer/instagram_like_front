import react from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export const bottomTabIcons = [
	{
		name: "home",
		active: require("../../assets/home_active.png"),
		inactive: require("../../assets/home_inactive.png"),
	},
	{
		name: "search",
		active: require("../../assets/search_active.png"),
		inactive: require("../../assets/search_inactive.png"),
	},
	{
		name: "profile",
		active: require("../../assets/profile_active.png"),
		inactive: require("../../assets/profile_inactive.png"),
	},
];

const BottomTabs = ({ icons }) => {
	const [activeTab, setActiveTab] = react.useState("home");

	const Icon = ({ icon }) => (
		<TouchableOpacity onPress={() => setActiveTab(icon.name)}>
			<Image
				source={activeTab === icon.name ? icon.active : icon.inactive}
				style={{ width: 30, height: 30 }}
			/>
		</TouchableOpacity>
	);
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-around",
				height: 50,
				paddingTop: 10,
				borderTopColor: "lightgrey",
				borderTopWidth: 0.5,
			}}>
			{icons.map((icon, index) => (
				<Icon
					icon={icon}
					key={index}
				/>
			))}
		</View>
	);
};

export default BottomTabs;
