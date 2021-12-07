import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  ScrollView,
  Button,
} from 'react-native';

const Loading = function () {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={[styles.horizontal, styles.text]}>Activity Indicator</Text>
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="#0000ff" />
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  button: {
    marginTop: 10,
    width: '50%',
    alignSelf: 'center',
    borderRadius: '5',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loading;
