import { questionBank } from '@/components/Quiz/Questions';
import Head from 'next/head'
import Link from 'next/link';
import { useEffect, useState } from 'react';

function get5RandomQuestions(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array.slice(0, 5);
}

export default function Quiztime() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [seed, setSeed] = useState(1);
    
    const reset = () => {
        setSeed(Math.random());
    }

    const expression = [
        <>&#128543;</>,
        <>&#128543;</>,
        <>&#128527;</>,
        <>&#128527;</>,
        <>&#128512;</>,
        <>&#128512;</>,
    ]
    useEffect(() => {
        setCurrentQuestion(0)
        setSelectedOptions([])
        setScore(0)
        setShowScore(false)
        setQuestions(get5RandomQuestions(questionBank));
    }, [seed]);

    const handleAnswerOption = (answer) => {
        setSelectedOptions([
            (selectedOptions[currentQuestion] = { answerByUser: answer }),
        ]);
        setSelectedOptions([...selectedOptions]);
        console.log(selectedOptions);
    };

    const handlePrevious = () => {
        const prevQues = currentQuestion - 1;
        prevQues >= 0 && setCurrentQuestion(prevQues);
    };

    const handleNext = () => {
        const nextQues = currentQuestion + 1;
        nextQues < questions.length && setCurrentQuestion(nextQues);
    };

    const handleSubmitButton = () => {
        let newScore = 0;
        for (let i = 0; i < questions.length; i++) {
            questions[i].answerOptions.map(
                (answer) =>
                    answer.isCorrect &&
                    answer.answer === selectedOptions[i]?.answerByUser &&
                    (newScore += 1)
            );
        }
        setScore(newScore);
        setShowScore(true);
    };

    return (
        <>
            <Head>
                <title>Sustainability Quiz - Larry Rowbs Foundation</title>
                <meta name="description" content="How much do you know about Sustainable Fashion? Test it out with our Sustainability Quiz." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="px-5 sm:py-12 md:py-28 bg-slate-700 justify-center items-center">
                    {questions.length?
                        (showScore ? (
                            <div className='w-1/2 align-middle items-center m-auto justify-center flex flex-col space-y-5'>
                                <h1 className="text-3xl font-semibold text-center text-white">
                                    You scored {score} out of {questions.length}
                                    {expression[score]}
                                </h1>
                                <button onClick={reset} className="inline align-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                    Try Again
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="">
                                    <h4 className="py-4 text-xl text-white/60">
                                        Question {currentQuestion + 1} of {questions.length}
                                    </h4>
                                    <div className="py-4 text-2xl text-white">
                                        {questions[currentQuestion].question}
                                    </div>
                                </div>
                                <div className="w-full">
                                    {questions[currentQuestion].answerOptions.map((answer, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-white/10 rounded-xl bg-white/5"
                                            onClick={(e) => handleAnswerOption(answer.answer)}
                                        >
                                            <input
                                                type="radio"
                                                name={answer.answer}
                                                value={answer.answer}
                                                checked={
                                                    answer.answer === selectedOptions[currentQuestion]?.answerByUser
                                                }
                                                onChange={(e) => handleAnswerOption(answer.answer)}
                                                className="w-6 h-6 bg-black"
                                            />
                                            <p className="ml-6 text-white">{answer.answer}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full py-4 text-white space-x-2">
                                    <button
                                        onClick={handlePrevious}
                                        className="w-[49%] py-3 bg-indigo-600 rounded-lg disabled:bg-indigo-400 disabled:cursor-not-allowed"
                                        disabled={currentQuestion == 0}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={
                                            currentQuestion + 1 === questions.length
                                                ? handleSubmitButton
                                                : handleNext
                                        }
                                        className="w-[49%] py-3 bg-indigo-600 rounded-lg"
                                    >
                                        {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
                                    </button>
                                </div>
                            </>
                        ))
                        : <h2 className="text-3xl font-semibold text-center text-white">No Questions </h2>}
                </div>
            </main>
        </>
    )
}
