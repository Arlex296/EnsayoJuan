import React from 'react';
import { ScrollView, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque
          justo et magna feugiat, in malesuada justo dapibus. Nam non ligula
          faucibus, dapibus erat at, molestie dolor.
        </Text>
        <Text style={styles.paragraph}>
          Integer semper lorem at eros auctor, eget facilisis turpis accumsan. Nulla
          facilisi. Cras quis commodo nulla, nec tempus odio. Maecenas ac lacinia
          ex.
        </Text>
        <Text style={styles.paragraph}>
          Fusce at suscipit nisl, sed dignissim massa. Ut vehicula odio non nisl
          scelerisque, in laoreet felis suscipit. Nulla ac nulla nec tellus
          hendrerit fringilla.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginVertical: 8,
    fontSize: 16,
    lineHeight: 24,
  },
});
