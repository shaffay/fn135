import { StyleSheet, Text, View,Image, } from 'react-native';
import { LinearGradient  } from 'expo-linear-gradient';
import {Title,Card,Button } from 'react-native-paper';
import { MaterialIcons,FontAwesome5 ,Entypo  } from '@expo/vector-icons'; 


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
            <Title> Shaffay Bajwa</Title>
            <Text>React Native Dev</Text>




        </View>

            <View style={styles.mainview}>
              
              <Card style={styles.card}>
                  <View style={styles.cardview}>

                      <MaterialIcons name="email" style={{color:"#009ea1",marginRight:5}} size={22} color="black" />
                        <Text style="styles.cardtext" >Email: shaffaybajwa@gmail.com</Text>
                     

                  </View>
              </Card>
              <Card style={styles.card}>
                  <View style={styles.cardview}>
                  <FontAwesome5 name="money-check-alt" style={{color:"#009ea1",marginRight:5}} size={22} color="black"/>
                     
                        <Text style="styles.cardtext" >Salary: 120K</Text>
                     

                  </View>
              </Card>
              <Card style={styles.card}>
                  <View style={styles.cardview}>

                  <Entypo name="phone"  style={{color:"#009ea1",marginRight:5}} size={22} color="black" />
                        <Text style="styles.cardtext" >Phone: 03128780074</Text>
                     

                  </View>
              </Card>
              

            </View>

            <View style={styles.btn}>
            <Button style={styles.btnn} icon="account-edit" mode="contained" onPress={() => console.log('Pressed')}>
             Update Profile
            </Button>
            <Button style={styles.btnn}  icon="delete-sweep-outline" mode="contained" onPress={() => console.log('Pressed')}>
            Fire Employee
            </Button>
            </View>
      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover:{
    height:190,
    
  },
  img:{
    marginTop:-75,
    height:170,
    width:170,
    borderRadius:170/2,
   
  },
  mainview:{
    marginTop:45,
    margin:20
  },
  cardview:{
    margin:15,
    height:28,
    width:200,
    padding:1,
 
    flexDirection:"row",
    // backgroundColor:"#009ea1"
  },
  card:{
    marginBottom:8,
    borderRadius:19,
  },
  cardtext:{
 fontSize:20
  },
  btn:{
  flexDirection:"row",
  justifyContent:"space-evenly"
},
btnn:{
borderRadius:10,
color:"#009ea1"
}


});
