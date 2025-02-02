import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [
        {
          uid: "101",
          name: "John Doe",
          status: "Online",
          imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          uid: "102",
          name: "Jane Smith",
          status: "Busy",
          imageUrl: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
          uid: "103",
          name: "Michael Johnson",
          status: "Away",
          imageUrl: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
          uid: "104",
          name: "Emily Davis",
          status: "Offline",
          imageUrl: "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
          uid: "105",
          name: "David Brown",
          status: "Online",
          imageUrl: "https://randomuser.me/api/portraits/men/5.jpg"
        },
        {
          uid: "106",
          name: "Sophia Wilson",
          status: "Online",
          imageUrl: "https://randomuser.me/api/portraits/women/6.jpg"
        },
        {
          uid: "107",
          name: "James Anderson",
          status: "Do not disturb",
          imageUrl: "https://randomuser.me/api/portraits/men/7.jpg"
        },
        {
          uid: "108",
          name: "Olivia Martinez",
          status: "Available",
          imageUrl: "https://randomuser.me/api/portraits/women/8.jpg"
        },
        {
          uid: "109",
          name: "William Thomas",
          status: "Busy",
          imageUrl: "https://randomuser.me/api/portraits/men/9.jpg"
        },
        {
          uid: "110",
          name: "Ava Garcia",
          status: "Offline",
          imageUrl: "https://randomuser.me/api/portraits/women/10.jpg"
        }
      ];
  return (
    <View>
      <Text style={styles.headingtext}>ContactList</Text>
        <ScrollView style={styles.container}
        >
            {contacts.map(({uid,name,status,imageUrl}) => (
                <View key={uid} style={styles.contact}>
                    <Image source={{uri: imageUrl}} style={styles.contactImage}/>
                    <View style={{flexDirection:'column'}}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.status}>{status}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    headingtext:{
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:10,
        color:'#FFFFFF',
    },
    container:{
        padding:10,
    },
    contact:{
        paddingRight:20,
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    contactImage:{
        width:50,
        height:50,
        borderRadius:25,
    },
    name:{
        fontSize:16,
        fontWeight:'bold',
        color:'#FFFFFF',
    },
    status:{
        fontSize:14,
        color:'gray',
    }
})