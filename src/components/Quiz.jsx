import React, { useState, useEffect } from 'react';
import QuestionWrapper from './Question/QuestionWrapper';
import SeeResultsCard from './ResultsCard';

/**
 * Quiz holds the logic:
 *  Fetches questions from the API
 *  Holds currentIndex + answers state
 *  Implements handleSelect, handleNext, handleBack
 *  Shows loading/error states
 *  Passes everything into QuestionWrapper
 */
const Quiz = ({ user = 'doc' }) => {
  // State for fetched questions
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);

  // Quiz progression state
  const [currentIndex, setCurrentIndex] = useState(1);
  const [answers, setAnswers]           = useState({});
  const [showResults, setShowResults]   = useState(false);

  // On mount, fetch the questions list
  useEffect(() => {
    fetch(`https://fhc-api.onrender.com/questions?user=${user}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load questions: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setQuestions(data.questions || []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [user]);

  // Handlers
  const handleSelect = (value) => {
    setAnswers(prev => ({ ...prev, [currentIndex]: value }));
  };

  const handleBack = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (!answers[currentIndex]) {
      alert('Please select an answer before proceeding.');
      return;
    }
    if (currentIndex === questions.length) {
      setShowResults(true);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  // Render phases
  if (loading) {
    return <div>Loading questions…</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (showResults) {
    return <SeeResultsCard onFinish={() => window.location.reload()} />;
  }

  //  current question
  const currentQ = questions[currentIndex - 1] || {};

  return (
    <QuestionWrapper
      currentIndex={currentIndex}
      totalQuestions={questions.length}
      question={{ leadIn: '', highlight: currentQ.text }}
      selectedValue={answers[currentIndex]}
      onSelect={handleSelect}
      onNext={handleNext}
      onBack={handleBack}
    />
  );
};

export default Quiz;
