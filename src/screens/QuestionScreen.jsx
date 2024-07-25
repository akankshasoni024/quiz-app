import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import questionsData from '../../static/questions.json';

const QuestionScreen = ({ route }) => {
  const { subject } = route.params;
  const navigation = useNavigation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showHintModal, setShowHintModal] = useState(false);
  const [hintsRemaining, setHintsRemaining] = useState(3);

  const questions = questionsData[subject];
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
    if (option === currentQuestion.answer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
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
    } else {
      navigation.navigate('ResultScreen', {
        score: (correctAnswers / questions.length) * 100,
        correct: correctAnswers,
        incorrect: incorrectAnswers,
        total: questions.length,
        attempted: correctAnswers + incorrectAnswers,
        status: correctAnswers > incorrectAnswers ? 'Passed' : 'Failed'
      });
    }
  };

  const handleShowHint = () => {
    if (hintsRemaining > 0) {
      setShowHintModal(true);
    }
  };

  const handleHintModalClose = () => {
    setShowHintModal(false);
    setHintsRemaining(hintsRemaining - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.progressText}>{`${currentQuestionIndex + 1}/${questions.length}`}</Text>
        {/* <Text style={styles.draftSaved}>Draft Saved</Text> */}
        <TouchableOpacity style={styles.hintButton} onPress={handleShowHint} disabled={hintsRemaining <= 0}>
          <Text style={styles.hintButtonText}>💡 {hintsRemaining}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.question}>{`${currentQuestion.question}`}</Text>
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

      {/* Hint Modal */}
      <Modal
        visible={showHintModal}
        transparent={true}
        animationType="slide"
        onRequestClose={handleHintModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHintText}>{currentQuestion.hint}</Text>
            <Button title="OK, got it" onPress={handleHintModalClose} />
          </View>
        </View>
      </Modal>
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
  hintButton: {
    backgroundColor: '#F9F01A',
    borderRadius: 20,
    padding: 10,
  },
  hintButtonText: {
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalHintText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default QuestionScreen;
