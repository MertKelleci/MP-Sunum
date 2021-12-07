import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Toaster from './Toaster';

const AndroidComponent = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const [drawerKonum, setDrawerKonum] = useState('sol');
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
      setDrawerKonum('sağ');
    } else {
      setDrawerPosition('left');
      setDrawerKonum('sol');
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>Drawer!</Text>
      <Button
        title="Drawer'ı kapat"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>Drawer {drawerKonum}da!</Text>
        <Button
          title="Drawer konumunu değiştir"
          onPress={() => changeDrawerPosition()}
        />
        <Text style={styles.paragraph}>
          Drawer'a erişmek için doğru kenardan kaydır ya da açma butonuna dokun!
        </Text>
        <Button
          title="Drawer'ı aç"
          onPress={() => drawer.current.openDrawer()}
        />

        <Toaster />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#888888',
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default AndroidComponent;
