import Head from "next/head";
import SurveyForm from '@/components/Forms/Survey'

const questions = [
    {
        question: "What is your name?",
        optional: false,
        type: "text",
        placeholder: "John Doe",
        name: "Question1"
    },
    {
        question: "What is your email?",
        optional: false,
        type: "email",
        placeholder: "your@email.com",
        name: "Question2",
    },
    {
        question: "How did you hear about The Larry Rowbs Foundation?",
        optional: false,
        type: "bigtext",
        placeholder: "From a friend, social media, or elsewhere?",
        name: "Question3",
    },
    {
        question: "What kind of support have you given to organizations that align with your values?",
        optional: false,
        type: "bigtext",
        placeholder: "(e.g. financial, skills, services, promoting, etc.)",
        name: "Question4",
    },
    {
        question: "What aspects of an organization inspire, empower, or motivate you to offer support? What are some key factors that encourage you to engage with an organization and contribute to their mission?",
        optional: false,
        type: "bigtext",
        placeholder: "In short, what motivates you to support an organization?",
        name: "Question5",
    },
    {
        question: "Does the mission/vision of The Larry Rowbs Foundation resonate with you?",
        optional: false,
        type: "boolean",
        name: "Question6",
    },
    {
        question: <>Would you be happy to support us with spare change round ups and a monthly contribution? (To learn more about spare change round-ups, checkout <a href="https://www.joinchangemaker.com/" className="text-purple-700">Change Maker</a>)</>,
        optional: false,
        type: "boolean",
        name: "Question7",
    },
    {
        question: "Do you have any feedback for us to help us improve how we do things?",
        optional: false,
        type: "bigtext",
        placeholder: "We would love to hear from you!",
        name: "Question8",
    }
]

export default function Survey() {
    return (
        <>
            <Head>
                <title>Survey - Larry Rowbs Foundation</title>
                <meta name="description" content="Tell us what you think about our mission. Larry Rowbs Foundation is always open to suggestions, ideas and discussion." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <SurveyForm 
                    heading={"Webinar Survey"}
                    doneButtonText="Done!"
                    description={<>Thanks for attending the webinar! <br />Please share your opinion below. It won&apos;t take more than 2-3 minutes to complete... promise &#128522;</>}
                    formQuestions={questions}
                    notionDB="NOTION_SURVEY"
                    bgImage="https://i.ibb.co/51CmDNC/v880-kul-10.jpg"
                />
            </div>
        </>
    );
}