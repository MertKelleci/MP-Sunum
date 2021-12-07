import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';

const BasicComponents = function ({navigation}) {
  const [text, setText] = useState('');
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require('../../images/React_Native_Logo.png')}
        />
      </View>
      <TextInput
        onChangeText={newText => setText(newText)}
        value={text}
        placeholder="Bana bir şeyler yaz!"
        style={styles.input}
      />
      <Text style={styles.text}>{text}</Text>

      <View style={styles.button}>
        <Button
          title="Ana Menü"
          onPress={() => navigation.navigate('Home')}
          style={styles.button}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
    fontSize: 20,
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  imageView: {
    maxHeight: 300,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    marginTop: 10,
    width: '50%',
    alignSelf: 'center',
    borderRadius: '5',
    marginBottom: 50,
  },
});

export default BasicComponents;
