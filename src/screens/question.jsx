import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const questions = {
  Math: [
    { question: 'What is 2+2?', options: ['3', '4', '5', '6'], correct: 1 },
    // Add 9 more questions for Math
  ],
  Science: [
    { question: 'What planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], correct: 1 },
    // Add 9 more questions for Science
  ],
  // Add categories for History, Geography, Literature, and Sports
};

export default function QuestionScreen({ route, navigation }) {
  const { category } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (selectedOption === questions[category][currentQuestion].correct) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion < questions[category].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigation.navigate('About', { score, total: questions[category].length });
    }
  };

  const handleOptionPress = (index) => {
    setSelectedOption(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[category][currentQuestion].question}</Text>
      {questions[category][currentQuestion].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedOption === index && styles.selectedOption,
          ]}
          onPress={() => handleOptionPress(index)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      <Button title="Next" onPress={handleNext} disabled={selectedOption === null} />
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
  question: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#16213e',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#0f3460',
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
  },
});
