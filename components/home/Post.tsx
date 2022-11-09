import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import { USERS } from '../../data/users'


const Post = ({post}) => {
    return (
        <View style={{marginBottom: 30}}>
            <Divider orientation='vertical'/>
            <PostHeader post={post}/>
        </View>
    )
}

const PostHeader = ({post}) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{uri: post.profile_picture}} style={styles.story}/>
                <Text style={{fontWeight: '700', marginLeft: 5}}>{post.user}</Text>
            </View>

            <TouchableOpacity>
                    <Image 
                        source={require('../../assets/three_dots.png')}
                        style={styles.dots}
                    />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#FF8501'
    },
    dots: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    }
})

export default Post