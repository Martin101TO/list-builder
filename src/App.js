import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';

const PlaceholderImage = require('/assets/front-image.jpg');

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <ImageViewer placeholderImageSource={PlaceholderImage} />
        </View>
        <View style={styles.footerContainer}>
            <Button label="Army Lists" theme="listButton"/>
            <Button label="Reference" theme="rulesButton"/>
        </View>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer:{
    flex: 2/3,
    alignItems: 'center',
    padding: 10,
  }

});
