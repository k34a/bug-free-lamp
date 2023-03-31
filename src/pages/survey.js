import Head from "next/head";
import SurveyForm from '@/components/Forms/Survey'

const formData = {
    title: "Webinar Survey",
    description: (<> Thanks for attending the webinar! <br /> Please share your opinion below. It won&apos;t take more than 2-3 minutes to complete...promise &#128522;</>),
    required: [
        "Question0",
        "Question1",
        "Question2",
        "Question4",
        "Question5",
        "Question6",
        "Question9",
    ],
    donaButton: "Done!",
    properties: {
        Question0: {
            type: "text",
            placeholder: "John",
            label: "First name",
            titleCase: true,
        },
        Question1: {
            type: "text",
            placeholder: "Doe",
            label: "Last name",
            titleCase: true,
        },
        Question2: {
            type: "email",
            placeholder: "your@email.com",
            label: "What is your email?",
        },
        Question3: {
            type: "phone",
            placeholder: "Enter your phone number",
            label: "What is your phone number? (Optional)",
            optional: true,
        },
        Question4: {
            type: "bigtext",
            placeholder: "From a friend, social media, or elsewhere?",
            label: "How did you hear about The Larry Rowbs Foundation?",
        },
        Question5: {
            type: "bigtext",
            placeholder: "(e.g. financial, skills, services, promoting, etc.)",
            label: "What kind of support have you given to organizations that align with your values?",
        },
        Question6: {
            type: "bigtext",
            placeholder: "In short, what motivates you to support an organization?",
            label: "What aspects of an organization inspire, empower, or motivate you to offer support? What are some key factors that encourage you to engage with an organization and contribute to their mission?",
        },
        Question7: {
            type: "boolean",
            label: "Does the mission/vision of The Larry Rowbs Foundation resonate with you?",
        },
        Question8: {
            type: "boolean",
            label: "Would you be happy to support us with spare change round ups and a monthly contribution? (To learn more about spare change round-ups, checkout Change Maker)",
        },
        Question9: {
            type: "bigtext",
            placeholder: "We would love to hear from you!",
            label: "Do you have any feedback for us to help us improve how we do things?",
        },
    },
};


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
                    formData={formData}
                    notionDB="NOTION_SURVEY"
                    bgImage="https://i.ibb.co/51CmDNC/v880-kul-10.jpg"
                />
            </div>
        </>
    );
}