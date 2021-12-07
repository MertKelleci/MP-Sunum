import * as React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BasicComponents from './src/views/BasicComponents';
import UserInterface from './src/views/UserInterface';
import ListView from './src/views/ListView';
import AndroidComponent from './src/views/AndroidComponent';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Basic Components"
          onPress={() => navigation.navigate('Basic Components')}
        />
        <View style={styles.button}>
          <Button
            title="User Interface"
            onPress={() => navigation.navigate('User Interface')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="ListViews"
            onPress={() => navigation.navigate('ListViews')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Android Components"
            onPress={() => navigation.navigate('Android Component')}
          />
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User Interface" component={UserInterface} />
        <Stack.Screen name="Basic Components" component={BasicComponents} />
        <Stack.Screen name="ListViews" component={ListView} />
        <Stack.Screen name="Android Component" component={AndroidComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  button: {
    marginTop: 30,
  },
});

export default App;
