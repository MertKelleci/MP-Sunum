import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  Switch,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import ActivityIndicator from '../Components/ActivityIndicator';
import ModalComponent from '../Components/Modal';
import PressableComponent from '../Components/Pressable';

const UserInterface = function ({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.text}>Button</Text>
        <View style={styles.fixToText}>
          <Button
            title="Sol Buton"
            onPress={() => Alert.alert('Sol Butona Dokunuldu')}
          />
          <Button
            title="Sağ Buton"
            color="#f194ff"
            onPress={() => Alert.alert('Sağ Butona Dokunuldu')}
          />
        </View>
        <View style={styles.buton}>
          <Button
            title="Bana Dokunamazsın"
            disabled
            onPress={() => Alert.alert('Sağ Butona Dokunuldu')}
          />
        </View>

        <Text style={styles.text}>Switch</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{alignSelf: 'center'}}
        />

        <ActivityIndicator />
        <Text style={styles.text}>Modal</Text>
        <ModalComponent />
        <Text style={styles.text}>Pressable</Text>
        <PressableComponent />

        <View style={styles.button}>
          <Button
            title="Ana Menü"
            onPress={() => navigation.navigate('Home')}
            style={styles.button}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 16,
  },
  buton: {
    padding: 20,
    borderRadius: 20,
  },
  button: {
    marginTop: 10,
    width: '50%',
    alignSelf: 'center',
    borderRadius: '5',
    marginBottom: 50,
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 20,
  },
});

export default UserInterface;
