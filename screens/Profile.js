import { StyleSheet, Text, View,Image, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



export default function Profile() {
  return (
    <View style={styles.container}>

<LinearGradient

colors={['#009ea1','#081c1c']}
style={styles.cover}

/>
<View style={{ alignItems:'center'}}>

<Image 
source={{uri:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}
style={styles.img}
/>



</View>
  


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover:{
    height:220,
    
  },
  img:{
    marginTop:-75,
    height:170,
    width:170,
    borderRadius:170/2,
   
  }


});
