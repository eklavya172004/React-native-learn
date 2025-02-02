import React from "react";
import {View,Text, useColorScheme, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { JSXSource } from "react/jsx-dev-runtime";
import Flatcard from "./components/Flatcard";
import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";

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
                        <ActionCard/>
                        <ContactList/>
            </ScrollView>
        </SafeAreaView>
    )
}



export default AppPro; 