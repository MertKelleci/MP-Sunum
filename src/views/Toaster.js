import React from 'react';
import {View, StyleSheet, ToastAndroid, Button, StatusBar} from 'react-native';

const Toaster = () => {
  const showToast = () => {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'Merhaba',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Merhaba',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Toast" onPress={() => showToast()} />
      <Button
        title="Gravity ile Toast"
        onPress={() => showToastWithGravity()}
      />
      <Button
        title="Gravity ve Offset ile Toast"
        onPress={() => showToastWithGravityAndOffset()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#888888',
    padding: 8,
  },
});

export default Toaster;
