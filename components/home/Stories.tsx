import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { USERS } from '../../data/users'


const Stories = () => {
    return (
        <View style={{marginBottom: 13}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    USERS.map((story, index) => (
                        <View key={index} style={{alignItems: 'center'}}>
                            <Image 
                            source={{uri: story.image}}
                            style={styles.story}
                            />
                            <Text>
                                {
                                    story.user.length > 10 ? story.user.slice(0, 10).toLocaleLowerCase() + '...' : story.user.toLocaleLowerCase()
                                }
                            </Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#FF8501'
    }
})

export default Stories