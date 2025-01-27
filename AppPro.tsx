import React from "react";
import {View,Text, useColorScheme, StyleSheet} from 'react-native'
import { JSXSource } from "react/jsx-dev-runtime";

function AppPro(): JSX.Element{
    const isDarkmode = useColorScheme() === 'dark'

    return(
        <View style={styles.container}>
            <Text style={isDarkmode?styles.whiteText:styles.darktext}>
                Hello world!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'flex-end'
    },
    whiteText:{
        color: '#FFFFFF',
    },
    darktext:{
        color:'#000000'
    }
})

export default AppPro; 