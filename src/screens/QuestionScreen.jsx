import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import questionsData from '../../static/questions.json';

const QuestionScreen = ({ route }) => {
  const { subject } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = questionsData[subject];
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const getOptionStyle = (option) => {
    if (!showAnswer) return styles.optionButton;
    if (option === currentQuestion.answer) return [styles.optionButton, styles.correctOption];
    if (option === selectedOption) return [styles.optionButton, styles.incorrectOption];
    return styles.optionButton;
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.progressText}>{`${currentQuestionIndex + 1}/${questions.length}`}</Text>
        <Text style={styles.draftSaved}>Draft Saved</Text>
        <View style={styles.lightBulbContainer}>
          <Text style={styles.lightBulbText}>4</Text>
        </View>
      </View>
      <Text style={styles.question}>{`Q. ${currentQuestion.question}`}</Text>
      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={getOptionStyle(option)}
          onPress={() => handleOptionPress(option)}
          disabled={showAnswer}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      {showAnswer && (
        <TouchableOpacity style={styles.skipButton} onPress={handleNextQuestion}>
          <Text style={styles.skipText}>Next</Text>
        </TouchableOpacity>
      )}
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
  correctOption: {
    borderColor: 'green',
  },
  incorrectOption: {
    borderColor: 'red',
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
