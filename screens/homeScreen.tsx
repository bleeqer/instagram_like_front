import React from 'react'
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post';
import {Posts} from '../data/posts';

const HomeScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Header/>
            <Stories/>
            <ScrollView>
                {Posts.map((post, index) => (
                    <Post key={index} post={post}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
})

export default HomeScreen


