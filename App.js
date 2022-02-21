import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, } from 'react-native';
import Home from './screens/Home';
import Profile  from './screens/Profile';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>

    {/* <Home /> */}
    <Profile />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    marginTop:Constants.statusBarHeight,
 
  },


});
