import React from "react";
import {View,Text, useColorScheme, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { JSXSource } from "react/jsx-dev-runtime";
import Flatcard from "./components/Flatcard";

function AppPro(): JSX.Element{
    // const isDarkmode = useColorScheme() === 'dark'

    return(
        <SafeAreaView>
            <ScrollView >
                <Text>
                    <Flatcard/>
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}



export default AppPro; 