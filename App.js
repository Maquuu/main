import React from 'react';
import {Text, View, Image, SafeAreaView, StyleSheet} from 'react-native';



export default function App() {
  return (
  <SafeAreaView>
    <View style={styles.container}> 
     
      <Image style={styles.zdj3} source={require('./assets/1strona.png')}/>
  
    </View>
    
      
    
  </SafeAreaView>
  );
};
  const styles  = StyleSheet.create({
    container: {
      
      justifyContent: 'center', 
    alignItems: 'center',
    },
   zdj3: {
   width: '100%',
   height: '100%',
    marginBottom: 0,
    resizeMode: 'cover',
   },
  });
export {App};