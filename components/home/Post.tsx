import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import { USERS } from '../../data/users'

const postFooterIcons = [
	{
		name: "like",
		imageUrl: require("../../assets/like_icon.png"),
		likedImageUrl: require("../../assets/liked_icon.png"),
	},
	{
		name: "comment",
		imageUrl: require("../../assets/comment_icon.png"),
	},
	{
		name: "share",
		imageUrl: require("../../assets/share_icon.png"),
	},
	{
		name: "save",
		imageUrl: require("../../assets/save_icon.png"),
	},
];

const Post = ({ post }) => {
	return (
		<View style={{ marginBottom: 30 }}>
			<Divider orientation="vertical" />
			<PostHeader post={post} />
			<PostImage post={post} />
			<View style={{ marginHorizontal: 15, marginTop: 10 }}>
				<PostFooter />
				<Likes post={post} />
				<Caption post={post} />
				<CommentSection post={post} />
				<Comments post={post} />
			</View>
		</View>
	);
};

const PostHeader = ({ post }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				margin: 5,
				alignItems: "center",
			}}>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<Image
					source={{ uri: post.profile_picture }}
					style={styles.story}
				/>
				<Text style={{ fontWeight: "700", marginLeft: 5 }}>{post.user}</Text>
			</View>

			<TouchableOpacity>
				<Image
					source={require("../../assets/three_dots.png")}
					style={styles.dots}
				/>
			</TouchableOpacity>
		</View>
	);
};

const PostImage = ({ post }) => (
	<View style={{ height: 420 }}>
		<Image
			source={{ uri: post.imageUrl }}
			style={{ height: "100%", resizeMode: "cover" }}
		/>
	</View>
);

const PostFooter = () => (
	<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
		<View style={{ flexDirection: "row" }}>
			<Icon
				imageStyle={{ width: 26, height: 26, marginEnd: 10 }}
				imageUrl={postFooterIcons[0].imageUrl}
			/>
			<Icon
				imageStyle={styles.footerIcon}
				imageUrl={postFooterIcons[1].imageUrl}
			/>
			<Icon
				imageStyle={styles.footerIcon}
				imageUrl={postFooterIcons[2].imageUrl}
			/>
		</View>
		<View>
			<Icon
				imageStyle={styles.footerIcon}
				imageUrl={postFooterIcons[3].imageUrl}
			/>
		</View>
	</View>
);

const Icon = ({ imageStyle, imageUrl }) => (
	<TouchableOpacity>
		<Image
			source={imageUrl}
			style={imageStyle}
		/>
	</TouchableOpacity>
);

const Likes = ({ post }) => (
	<View style={{ flexDirection: "row", marginTop: 5 }}>
		<Text style={{ fontWeight: "600" }}>
			{post.likes.toLocaleString("en")} likes
		</Text>
	</View>
);

const Caption = ({ post }) => (
	<View style={{ marginTop: 5, flexDirection: "row" }}>
		<Text style={{ fontWeight: "800", marginEnd: 5 }}>{post.user}</Text>
		<Text>{post.caption}</Text>
	</View>
);

const CommentSection = ({ post }) => (
	<View style={{ marginTop: 5 }}>
		{post.comments.length > 0 && (
			<Text style={{ color: "gray" }}>
				{post.comments.length > 1
					? "View all " + post.comments.length + " comments"
					: "View all " + post.comments.length + " comment"}
			</Text>
		)}
	</View>
);

const Comments = ({ post }) => (
	<View>
		{post.comments.map((comment, index) => (
			<View
				style={{ flexDirection: "row", marginTop: 5 }}
				key={index}>
				<Text style={{ fontWeight: "800", marginEnd: 5 }}>{comment.user}</Text>
				<Text>{comment.comment}</Text>
			</View>
		))}
	</View>
);

const styles = StyleSheet.create({
	story: {
		width: 35,
		height: 35,
		borderRadius: 50,
		marginLeft: 6,
		borderWidth: 1.6,
		borderColor: "#FF8501",
	},
	dots: {
		width: 20,
		height: 20,
		resizeMode: "contain",
	},
	footerIcon: {
		width: 25,
		height: 25,
		marginEnd: 10,
	},
});

export default Post