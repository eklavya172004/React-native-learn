import React from "react";

import {View,Text,SafeAreaView} from 'react-native'
//view is just like a div not 100% same but similar
//text is like a p 

function App(){
  return(
    //safe area wraps up everything means mix of javascript and html
    <SafeAreaView>
      <View>
        <Text>Helllo world!</Text>
        <Text>Helllo world!</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;