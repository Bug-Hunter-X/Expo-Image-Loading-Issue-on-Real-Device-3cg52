import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function App() {
  const [imageUri, setImageUri] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      try {
        const asset = Expo.Asset.fromModule(require('./assets/image.jpg'));
        await asset.downloadAsync();
        setImageUri(asset.uri);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    })();
  }, []);

  if (!imageUri) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});