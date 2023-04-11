import { questionBank } from '@/components/Quiz/Questions';
import Head from 'next/head'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { Circles } from 'react-loader-spinner';

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
    const [hasStarted, setHasStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [seed, setSeed] = useState(1);
    const [loading, setLoading] = useState(false);
    
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
        setHasStarted(false);
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
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            prevQues >= 0 && setCurrentQuestion(prevQues);
        }, 1000);
    };

    const handleNext = () => {
        const nextQues = currentQuestion + 1;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            nextQues < questions.length && setCurrentQuestion(nextQues);
        }, 1000);
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
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setScore(newScore);
            setShowScore(true);
        }, 1000);
    };


    const shareScoreTwitter = () => {
        const tweetText = encodeURIComponent(`I scored ${score} out of ${questions.length} in the Sustainability Fashion Quiz. Let us see where you stand :) Test it here https://larryrowbsfoundation.org/quiztime`);
        const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
        window.open(tweetUrl, "_blank");
    }

    const getStarted = (
        <div className='w-11/12 md:w-1/2 align-middle items-center m-auto justify-center flex flex-col space-y-5 text-white'>
            <h1 className='text-4xl font-black underline capitalize'>Sustainability Quiz</h1>
            <p className='text-xl'>Welcome to our sustainability quiz! This quiz aims to test your knowledge on sustainable fashion and its impact on Africa, as well as the harms of fast fashion and consumer choices.</p>
            <p className='text-xl'>The fashion industry has a significant impact on the environment and society, and it&apos;s important to understand how our choices as consumers can make a difference. By taking this quiz, you&apos;ll learn about the benefits of sustainable fashion, the negative impacts of fast fashion, and how you can make more sustainable fashion choices.</p>
            <p className='text-xl pb-6'>Are you ready to test your knowledge on sustainable fashion? Let&apos;s get started!</p>
            <button onClick={(e) => setHasStarted(true)} className="inline align-center bg-green-800 hover:bg-green-700 text-white font-bold py-3 px-5 border border-blue-700 rounded">
                Start Quiz
            </button>
        </div>
    );

    const scoreSheet = (
        <div className='h-screen w-11/12 sm:w-1/2 align-middle items-center m-auto justify-center flex flex-col space-y-5'>
            <h1 className="text-3xl font-semibold text-center text-white">
                You scored {score} out of {questions.length}
                <span className='ml-2'>{expression[score]}</span>
            </h1>
            <button onClick={reset} className="inline align-center bg-red-700 hover:bg-green-700 text-white font-bold py-2 px-4 border border-indigo-700 rounded">
                Try Again
            </button>
            <button onClick={shareScoreTwitter} className="inline align-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-4 border border-blue-700 rounded-full">
                <FaTwitter size={20} />
            </button>
        </div>
    );

    const questionWithOptions = (
        <>
            <div className="">
                <h4 className="py-4 text-xl text-white/60">
                    Question {currentQuestion + 1} of {questions.length}
                </h4>
                <div className="py-4 text-2xl text-white">
                    {questions[currentQuestion]?.question}
                </div>
            </div>
            <div className="w-full">
                {questions[currentQuestion]?.answerOptions?.map((answer, index) => (
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
                            className="w-6 h-6 bg-green-300"
                        />
                        <p className="ml-6 text-white">{answer.answer}</p>
                    </div>
                ))}
            </div>
            <div className="w-full py-4 text-white align-center space-y-2 sm:space-y-0 sm:space-x-2 grid grid-cols-1 sm:grid-cols-2">
                <button
                    onClick={handlePrevious}
                    className="w-full py-3 bg-green-700 rounded-lg disabled:text-green-400 disabled:cursor-not-allowed"
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
                    className="w-full py-3 bg-green-700 rounded-lg"
                >
                    {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
                </button>
            </div>
        </>
    );

    return (
        <>
            <Head>
                <title>Sustainability Quiz - Larry Rowbs Foundation</title>
                <meta name="description" content="How much do you know about Sustainable Fashion? Test it out with our Sustainability Quiz." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="px-5 py-12 md:py-28 bg-green-500 justify-center items-center relative">
                    {loading && <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <Circles
                            height="80"
                            width="80"
                            color="#cccccc"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>}
                    <div className={`${loading? "blur-md" : ""}`}>
                        {
                            hasStarted? (
                                questions.length? (showScore ? scoreSheet : questionWithOptions)
                                : <h2 className="text-3xl font-semibold text-center text-white">No Questions Available </h2>
                            ): getStarted
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
