// QuestionScreen.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const QuestionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.progressText}>1/10</Text>
        <Text style={styles.draftSaved}>Draft Saved</Text>
        <View style={styles.lightBulbContainer}>
          <Text style={styles.lightBulbText}>4</Text>
        </View>
      </View>
      {/* <ProgressBarAndroid style={styles.progressBar} styleAttr="Horizontal" indeterminate={false} progress={0.1} /> */}
      <Text style={styles.question}>Q. What is your name?</Text>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Option</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Option</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Option</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Option</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d3b66',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  draftSaved: {
    color: 'grey',
    fontSize: 12,
  },
  lightBulbContainer: {
    backgroundColor: '#ffd700',
    borderRadius: 20,
    padding: 10,
  },
  lightBulbText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressBar: {
    width: '100%',
    height: 10,
    marginBottom: 30,
  },
  question: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#1e3d59',
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 10,
    width: '100%',
    borderRadius: 5,
    borderColor: '#40a8c4',
    borderWidth: 1,
  },
  optionText: {
    color: 'white',
    fontSize: 18,
  },
  skipButton: {
    backgroundColor: '#40a8c4',
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 20,
    width: '100%',
    borderRadius: 5,
  },
  skipText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default QuestionScreen;
