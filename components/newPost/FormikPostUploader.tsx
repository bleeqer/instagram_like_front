import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button, Divider } from "react-native-elements";
import validUrl from "valid-url";

// const uploadPostSchema = Yup.object().shape({
// 	imageUrl: Yup.string().url().required("Image URL is required"),
// 	caption: Yup.string().max(2200, "Caption must be less than 2200 characters"),
// });

const PLACEHOLDER_IMG = "https://picsum.photos/205";

const uploadPostSchema = Yup.object({
	imageUrl: Yup.string().url().required("Image URL is required"),
	caption: Yup.string().max(2200, "Caption must be less than 2200 characters"),
});

const FormikPostUploader = ({ navigation }) => {
	const [thumbnail, setThumbnail] = React.useState("");
	return (
		<Formik
			initialValues={{ imageUrl: "", caption: "" }}
			onSubmit={(values) => {
				console.log(values);
				console.log("You have successfully uploaded a post!");
				navigation.goBack();
			}}
			validationSchema={uploadPostSchema}
			validateOnMount={true}>
			{({
				handleChange,
				handleBlur,
				handleSubmit,
				values,
				errors,
				isValid,
			}) => (
				<View style={{ margin: 10 }}>
					<View
						style={{
							justifyContent: "space-between",
							flexDirection: "row",
							marginBottom: 10,
						}}>
						<Image
							source={{
								uri: validUrl.isUri(thumbnail) ? thumbnail : PLACEHOLDER_IMG,
							}}
							style={{ width: 100, height: 100 }}
						/>
						<TextInput
							placeholder="Write a caption..."
							placeholderTextColor={"gray"}
							multiline={true}
							style={{ fontSize: 20, marginLeft: 15, flex: 1 }}
							onChangeText={handleChange("caption")}
							onBlur={handleBlur("caption")}
							value={values.caption}></TextInput>
					</View>
					<Divider
						width={0.2}
						orientation="vertical"
						style={{ marginBottom: 5 }}
					/>
					<TextInput
						onChange={(e) => {
							setThumbnail(e.nativeEvent.text);
						}}
						placeholder="Enter image URL..."
						placeholderTextColor={"gray"}
						style={{ fontSize: 18, marginBottom: 5 }}
						onChangeText={handleChange("imageUrl")}
						onBlur={handleBlur("imageUrl")}
						value={values.imageUrl}></TextInput>
					{errors.imageUrl && (
						<Text style={{ fontSize: 10, color: "red" }}>
							{errors.imageUrl}
						</Text>
					)}
					<Button
						onPress={handleSubmit}
						title="Share"
						disabled={!isValid}></Button>
				</View>
			)}
		</Formik>
	);
};

export default FormikPostUploader;
