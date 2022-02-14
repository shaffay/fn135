import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import { Card,Title,FAB  } from 'react-native-paper';




export default function Home() {

  const data = [
    {id:"1",name:"Shaffay Bajwa",position:"React Native Dev",Picture:"https://images.unsplash.com/photo-1642935577638-ef43a783963e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"},
    {id:"2",name:"Umer Rehan",position:"React Js Dev",Picture:"https://images.unsplash.com/photo-1642935577638-ef43a783963e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"},
    {id:"3",name:"Safwan Khan",position:"WordPress Dev",Picture:"https://images.unsplash.com/photo-1642935577638-ef43a783963e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"},
  ]

  const RenderList = (item) => {
    return(

        <Card style={styles.cardview} key={item.id}>

        <View style={styles.cardcontent} >

            {/* <Image 
            source={{uri: item.Picture }}
            style={styles.img}
            /> */}

            <View style={styles.cardText}>
                            <Title>
                               {item.name}
                            </Title>

                            <Text style={{fontSize:18}}>
                              {item.position}
                            </Text>

        </View>


        </View>

        </Card>

    )
  }

  return (

    <View style={styles.container}>

      <FlatList 
      data={data}
      renderItem={ ({ item })=>{
        return RenderList(item)
      }
        }
      
      />

   
<FAB
        style={styles.fab}
        large
        icon="plus"
        onPress={() => console.log('Pressed')}
    />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  cardview:{
      margin:8,
  },
  cardText:{
    //   marginLeft:10,
      flexDirection:"column",
    //   marginTop:8,
      margin:15
  },
  img:{
      marginLeft:10,
      margin:8,
      height:90,
      width:90,
      borderRadius:90/2
  },
  cardcontent:{
      flexDirection:"row",
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 15,
  },


});

