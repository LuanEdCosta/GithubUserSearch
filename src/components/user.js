import React from "react"

import { 
    View,
    StyleSheet,
    Image,
    Text
} from "react-native"

export default function user({ user }){
     return user ? (
        <View style={styles.userContainer}>
            <Image source={{ uri: user.image }} style={styles.image} />
            <Text style={styles.bigText}>{user.name}</Text>
            <Text style={styles.normalText}>{user.bio}</Text>
        </View>
    ) :
    (
        <View style={styles.anyDataContainer}>
            <Text style={styles.anyMessage}>Any user Found</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        paddingVertical: 24,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        marginTop: 16,
    },
    anyDataContainer: {
        paddingVertical: 16,
        marginTop: 16,
    },
    image: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 1,
        borderColor: '#f2f2f2',
    },
    bigText: {
        textAlign: 'center',
        fontSize: 20,
        padding: 16,
    },
    normalText: {
        textAlign: 'center',
        fontSize: 16,
    },
    anyMessage: {
        textAlign: 'center',
        color: 'red',
        fontSize: 16
    }
})