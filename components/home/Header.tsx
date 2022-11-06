import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'


const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    style={styles.logo}
                    source={require('../../assets/header_logo.png')}
                />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image
                        style={[styles.icon, styles.icon_1]}
                        source={require('../../assets/post_icon.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={[styles.icon, styles.icon_2]}
                        source={require('../../assets/like_icon.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={[styles.icon, styles.icon_3]}
                        source={require('../../assets/message_icon.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: 120,
        height: 50,
        resizeMode: 'contain'
    },
    icon: {
        resizeMode: 'contain',
        marginRight: 5
    },
    icon_1: {
        width: 40,
        height: 40
    },
    icon_2: {
        width: 40,
        height: 40
    },
    icon_3: {
        width: 40,
        height: 40
    }
})

export default Header