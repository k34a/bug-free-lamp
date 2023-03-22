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
        question: "What kind of support have you given to organizations that align with your values? (e.g. financial, skills, services, promoting, etc.)",
        optional: false,
        type: "bigtext",
        placeholder: "",
        name: "Question4",
    },
    {
        question: "What are some takeaways you've seen/heard/felt from an organization that inspired/empowered/motivated you to offer your support?",
        optional: false,
        type: "bigtext",
        placeholder: "",
        name: "Question5",
    },
    {
        question: "Does the mission/vision of The Larry Rowbs Foundation resonate with you?",
        optional: false,
        type: "boolean",
        name: "Question6",
    },
    {
        question: "Would you be happy to support us with spare change round ups and a monthly contribution?",
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
            </Head>
            <div>
                <SurveyForm 
                    heading={"Survey"}
                    doneButtonText="Done!"
                    description={<>Thanks for attending the webinar! <br />Please share your opinion below. It won&apos;t take more than 2-3 minutes to complete... promise &#128522;</>}
                    formQuestions={questions}
                    notionDB="NOTION_SURVEY"
                />
            </div>
        </>
    );
}