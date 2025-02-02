import { Image, Linking, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import React, { useState } from 'react'

export default function ActionCard() {

    function openWebsite(url: string){
        Linking.openURL(url);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in React
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        React Native is a JavaScript library for building native apps using React.
                        It uses the same syntax and APIs as React, but adds support for native UI components, handles device-specific features, and provides a unified developer experience across iOS, Android, and web.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://reactnative.dev/')}
                        style={
                            styles.footerButton}
                    >
                        <Text style={styles.footerButtonText}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://github.com/eklavya172004')}
                        style={[
                            styles.footerButton
                        ]}
                    >
                        <Text style={styles.footerButtonText}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        // paddingHorizontal: 10,
        color: 'lightblue',
    },
    headingContainer: {
        marginBottom: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    elevatedCard: {
        marginVertical: 10,
        shadowColor: '#fffff', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    bodyContainer: {
        marginVertical: 10,
    },
    footerContainer: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    footerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footerButtonHovered: {
        backgroundColor: 'white',
    },
})