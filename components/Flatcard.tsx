import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ElevatedCards from './ElevatedCards'

const Flatcard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flatcard</Text>
        <View style={styles.container}>
          <View style={[styles.card1,styles.card2]}>
            <Text style={{color:'white'}}>
              Red
            </Text>
          </View>

          <View style={[styles.card1,styles.card3]}>
            <Text style={{color:'white'}}>
              Red
            </Text>
          </View>

          <View style={[styles.card1,styles.card4]}>
            <Text style={{color:'white'}}>
              Red
            </Text>
          </View>

          <View style={[styles.card1,styles.card5]}>
            <Text style={{color:'white'}}>
              Red
            </Text>
          </View>  
                              {/* <FancyCard/>         */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:20,
    fontWeight:'bold',
    paddingHorizontal:10,
    color:'lightblue'
  },
  container:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  card1:{
    width:100,
    height:100,
    borderRadius:4,
    margin:8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card2:{
    backgroundColor:'blue'
  },
  card3:{
    backgroundColor:'red'
  },
  card4:{
    backgroundColor:'black'
  },
  card5:{
    backgroundColor:'green'
  }
})
export default Flatcard