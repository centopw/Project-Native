import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Alarm from 'react-native-alarm-manager';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const alarm  = {
  alarm_time: 12:30:00,   // HH:mm:00
   alarm_title: 'title',
   alarm_text: 'text',
   alarm_sound: 'sound',   // sound.mp3
   alarm_icon: 'icon',     // icon.png
   alarm_sound_loop: true,
   alarm_vibration: true,
   alarm_noti_removable: true,
   alarm_activate: true,
 };
Alarm.schedule(
  alarm,
  success => console.log(success),
  fail => console.log(fail),
  
)