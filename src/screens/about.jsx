import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen({ route, navigation }) {
  const { score, total } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About the Developers</Text>
      <Text style={styles.text}>This app was developed by:</Text>
      <Text style={styles.text}>- Student 1</Text>
      <Text style={styles.text}>- Student 2</Text>
      <Text style={styles.text}>- Student 3</Text>
      <Text style={styles.text}>- Student 4</Text>
      {score !== undefined && total !== undefined && (
        <Text style={styles.text}>Your Score: {score} / {total}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
});
