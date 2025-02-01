import React from "react";
import {View,Text, useColorScheme, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { JSXSource } from "react/jsx-dev-runtime";
import Flatcard from "./components/Flatcard";
import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";

function AppPro(): JSX.Element{
    // const isDarkmode = useColorScheme() === 'dark'

    return(
        <SafeAreaView>
            <ScrollView >
                {/* <Text> */}
                    <Flatcard/>
                {/* </Text> */}
                      <ElevatedCards/>
                        <FancyCard/>
                        <FancyCard/>
                        <FancyCard/>
            </ScrollView>
        </SafeAreaView>
    )
}



export default AppPro; 