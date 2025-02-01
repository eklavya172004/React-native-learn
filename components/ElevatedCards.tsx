import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
        <ScrollView horizontal style={styles.container}>
            <View style={[styles.card,styles.cardelevated]}>
                <Text>Tap</Text>
            </View>

            <View style={[styles.card,styles.cardelevated]}>
                <Text>Tap</Text>
            </View>

            <View style={[styles.card,styles.cardelevated]}>
                <Text>Tap</Text>
            </View>

            <View style={[styles.card,styles.cardelevated]}>
                <Text>Tap</Text>
            </View>

            <View style={[styles.card,styles.cardelevated]}>
                <Text>Tap</Text>
            </View>

            <View style={[styles.card,styles.cardelevated]}>
                <Text>Tap</Text>
            </View>
            
            <View style={[styles.card,styles.cardelevated]}>
                <Text>Tap</Text>
            </View>

        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:10,
        color:'#FFFFFF',
      },
      card:{
        width:100,
        height:100,
        borderRadius:4,
        // margin:8,
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
      },
      cardelevated:{
         backgroundColor:'blue'
      },
      container:{
        padding:8,
      }
})