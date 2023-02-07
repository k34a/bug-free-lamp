import { useState } from "react";

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validateURL(s) {
    var regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);
}

const JoinUs = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [location, setLocation] = useState("");
    const [skills, setSkills] = useState("");
    const [resume, setResume] = useState("");
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);
    const [isInvalidResumeURL, setIsInvalidResumeURL] = useState(false);
    const [isInvalidLinkedInURL, setIsInvalidLinkedInURL] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isNotSubmitted, setIsNotSubmitted] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsInvalidEmail(false);
        setIsInvalidResumeURL(false);
        setIsInvalidLinkedInURL(false);
        setIsSubmitted(false);
        setIsNotSubmitted(false);
        if (!email || !validateEmail(email)) {
            setIsInvalidEmail(true);
        }
        if (!resume || !validateURL(resume)) {
            setIsInvalidResumeURL(true);
        }
        if (!linkedin || !validateURL(linkedin)) {
            setIsInvalidLinkedInURL(true);
        }
        else {
            const data = { 
                firstname: firstName, 
                lastname: lastName, 
                email, 
                contact, 
                linkedin, 
                location, 
                skills, 
                resume 
            };
            const response = await fetch("/api/joinus", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            if (!response.ok) {
                setIsNotSubmitted(true)
            }
            else {
                setIsSubmitted(true);
                setFirstName("");
                setLastName("");
                setEmail("");
                setContact("");
                setLinkedin("");
                setLocation("");
                setSkills("");
                setResume("");
            }
        }
    }

    return (
        <div className="w-full max-w-lg my-12 m-auto">
            <h1 className="text-4xl mb-8 font-bold">Join Us</h1>
            <p>
                We live by the principles of working together to overcome any obstacle we face, being true to ourselves and anyone we engage with, leveraging diverse skills and resources to accomplish our goals through unified creativity, maintaining a high level of transparency and respect in all communications, and empowering each person to unleash their gifts.
                <br /><br />
                We are looking at people with a varied skillset, especially in Fundraising and Marketing. If you think you can support us in any other way, please do let us know. We always welcome and value talent.
                <br /><br />
            </p>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name *
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-first-name"
                            type="text"
                            placeholder="Jane"
                            required={true}
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name *
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Doe"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            E-mail *
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="email"
                            required={true}
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="name@domain.com"
                        />
                        {isInvalidEmail && <p className="text-red-500 text-xs italic">Please enter a valid email.</p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Contact Number *
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="contact"
                            required={true}
                            type="tel"
                            onChange={(e) => setContact(e.target.value)}
                            value={contact}
                            placeholder="888 888 8888"
                            pattern="[0-9]{10}"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            LinkedIn Profile Link
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="linkedin"
                            type="text"
                            onChange={(e) => setLinkedin(e.target.value)}
                            value={linkedin}
                            placeholder="Link to your LinkedIn Account"
                        />
                        {isInvalidLinkedInURL && <p className="text-red-500 text-xs italic">Please enter a valid link to your LinkedIn account.</p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Which part of the world are you from? *
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="location"
                            required={true}
                            type="text"
                            onChange={(e) => setLocation(e.target.value)}
                            value={location}
                            placeholder="City, Country"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            What are your skills, strengths, gifts, & superpowers? *
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="skills"
                            required={true}
                            type="text"
                            onChange={(e) => setSkills(e.target.value)}
                            value={skills}
                            placeholder="Come on, don't hesitate :)"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Resume
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="resume"
                            type="text"
                            onChange={(e) => setResume(e.target.value)}
                            value={resume}
                            placeholder="Link to your resume"
                        />
                        {isInvalidResumeURL && <p className="text-red-500 text-xs italic">Please enter a valid link to your resume.</p>}
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                        <button
                            className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="submit"
                        >
                            Send
                        </button>
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
                {isNotSubmitted && <p className="text-red-500 text-xs italic my-6">Unable to proceed your request. Please try again later.</p>}
                {isSubmitted && <p className="text-green-500 text-xs italic my-6">Your message is sent successfully. Please expect a response within 24-48 hours.</p>}
            </form>
        </div>
    );
};

export default JoinUs;