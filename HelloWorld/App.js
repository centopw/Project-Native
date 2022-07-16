import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  console.log('It running');
  return (
    <View style={styles.container}>
      <Text>Hello World!!</Text>
      <Text style={styles.red}>A big red Hello World!</Text>
      <Text style={styles.blue}>Maybe a little blue Hello World! from the right side of the screen with a little border and shadows?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },

  blue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 15,
    alignContent: 'flex-end',
    textAlign: 'center',
    //Adding shadows to the text
    textShadowRadius: 1,
    shadowColor: '#FFF9CA',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    //Adding a background color to the text
    backgroundColor: '#3AB4F2',
  },

});
