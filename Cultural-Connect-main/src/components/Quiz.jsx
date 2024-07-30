// src/QuizComponent.js
import React, { useState } from 'react';

const QuizComponent = () => {
    const questions = [
        {
            questionText: 'Who is the CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
        {
            questionText: 'What is the capital of Japan?',
            answerOptions: [
                { answerText: 'Seoul', isCorrect: false },
                { answerText: 'Beijing', isCorrect: false },
                { answerText: 'Tokyo', isCorrect: true },
                { answerText: 'Bangkok', isCorrect: false },
            ],
        },
        {
            questionText: 'Which planet is known as the Red Planet?',
            answerOptions: [
                { answerText: 'Earth', isCorrect: false },
                { answerText: 'Mars', isCorrect: true },
                { answerText: 'Jupiter', isCorrect: false },
                { answerText: 'Saturn', isCorrect: false },
            ],
        },
        {
            questionText: 'What is the largest mammal in the world?',
            answerOptions: [
                { answerText: 'Elephant', isCorrect: false },
                { answerText: 'Blue Whale', isCorrect: true },
                { answerText: 'Giraffe', isCorrect: false },
                { answerText: 'Rhino', isCorrect: false },
            ],
        },
        {
            questionText: 'Who wrote "Romeo and Juliet"?',
            answerOptions: [
                { answerText: 'Charles Dickens', isCorrect: false },
                { answerText: 'Jane Austen', isCorrect: false },
                { answerText: 'William Shakespeare', isCorrect: true },
                { answerText: 'Mark Twain', isCorrect: false },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

    const handleAnswerOptionClick = (isCorrect, index) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = index;
        setAnswers(updatedAnswers);
        setSelectedOption(index);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(answers[currentQuestion + 1]);
        } else {
            setShowScore(true);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedOption(answers[currentQuestion - 1]);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="center text-3xl font-semibold">Test Your Knowledge</h2>
                    </div>
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                                    {(((currentQuestion + 1) / questions.length) * 100).toFixed(0)}%
                                </span>
                            </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                            <div style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"></div>
                        </div>
                    </div>
                </div>

                {showScore ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4 text-green-700">You scored {score} out of {questions.length}</h2>
                        <button
                            className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                            onClick={() => {
                                setCurrentQuestion(0);
                                setScore(0);
                                setShowScore(false);
                                setAnswers(Array(questions.length).fill(null));
                                setSelectedOption(null);
                            }}
                        >
                            Restart Quiz
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4 text-gray-800">{questions[currentQuestion].questionText}</h2>
                        </div>
                        <div className="space-y-4">
                            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
                                    className={`w-full flex items-center bg-white border-2 ${selectedOption === index ? 'border-green-600' : 'border-gray-300'} text-gray-900 py-2 px-4 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none`}
                                >
                                    <div className={`w-4 h-4 rounded-full mr-3 ${selectedOption === index ? 'bg-green-600' : 'bg-white border-2 border-gray-300'}`}></div>
                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>
                        <div className="flex justify-between mt-6">
                            <button
                                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                                onClick={handlePreviousQuestion}
                                disabled={currentQuestion === 0}
                            >
                                Previous
                            </button>
                            <button
                                className="bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                onClick={handleNextQuestion}
                                disabled={selectedOption === null}
                            >
                                {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default QuizComponent;