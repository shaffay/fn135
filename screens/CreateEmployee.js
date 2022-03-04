import React,{ useState } from 'react';
import { StyleSheet, Text, View,Image,FlatList,Modal } from 'react-native';
import { Card,Title,FAB,TextInput ,Button } from 'react-native-paper';




export default function createEmployee() {

    const [Name, setName] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [Phone, setPhone] = React.useState("");
    const [Position, setPosition] = React.useState("");
    const [Picture, setPicture] = React.useState("");
    const [Salary, setSalary] = React.useState("");
    const [VModal, setVModal] = React.useState(false);


  return (

    <View style={styles.container}>


<TextInput
          style={styles.input}
          label="Name"
          value={Name}
          mode="outlined"
          theme={theme}
          onChangeText={text => setName(text)}
        />
   <TextInput
          style={styles.input}
          label="Email"
          value={Email}
          mode="outlined"
          theme={theme}
          onChangeText={text => setEmail(text)}
        />
   <TextInput
          style={styles.input}
          label="Phone"
          value={Phone}
          mode="outlined"
          theme={theme}
          onChangeText={text => setPhone(text)}
        />
   <TextInput
          style={styles.input}
          label="Position"
          value={Position}
          mode="outlined"
          theme={theme}
          onChangeText={text => setPosition(text)}
        />
   <TextInput
          style={styles.input}
          label="Salary"
          value={Salary}
          mode="outlined"
          theme={theme}
          onChangeText={text => setSalary(text)}
        />

   <Button icon="camera" style={styles.input} mode="contained" onPress={() => setVModal(true) }>
    Upload File
   </Button>
    <Button icon="camera" style={styles.input} mode="contained" onPress={() => console.log('Pressed')}>
    Save
     </Button>

        <Modal visible="VModal"  >
              <Button icon="camera" style={styles.input} mode="contained" onPress={() => console.log('Pressed')}>
                  Camera
                </Button>
                  <Button icon="camera" style={styles.input} mode="contained" onPress={() => console.log('Pressed')}>
                Gallery
                  </Button>

        </Modal>


    </View>

  );
  const theme = {

    colors: {
      primary: "#009ea1",
      accent:"#081c1c",
    },


  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  input:{
    margin:10,

  }


});

