import { useRef, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from 'next/router';

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const SurveyForm = (props) => {
    const router = useRouter();
    const [formData, setFormData] = useState({});
    const [invalidFormFields, setInvalidFormFields] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isNotSubmitted, setIsNotSubmitted] = useState(false);
    const recaptchaRef = useRef();
    const [loading, setloading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        setloading(true);
        setIsSubmitted(false); 
        setIsNotSubmitted(false);
        setInvalidFormFields({});
        const token = await recaptchaRef.current.executeAsync();
        recaptchaRef.current.reset();
        
        const submittedData = {...formData};
        const invalidFieldsInSubmittedData = {}
        for (let i = 0; i < props.formQuestions?.length; i++){
            const fieldName = props.formQuestions?.[i].name
            if (props.formQuestions?.[i]?.type == "email"){
                const fieldVal = submittedData[props.formQuestions?.[i].name];
                if (fieldVal && !validateEmail(fieldVal)){
                    invalidFieldsInSubmittedData[fieldName] = true
                }
            }
            else if (props.formQuestions?.[i]?.type == "boolean") {
                const fieldVal = submittedData[props.formQuestions?.[i].name];
                submittedData[fieldName] = fieldVal? "Yes": "No";
            }
            if (submittedData[fieldName] == undefined){
                submittedData[fieldName] = ""
            }
        }
        if (invalidFieldsInSubmittedData && Object.keys(invalidFieldsInSubmittedData).length == 0){
            console.log("Submitted")
            const response = await fetch("/api/submitsurvey", {
                method: "POST",
                body: JSON.stringify({ ...submittedData, token, notionDB: props.notionDB}),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            if (!response.ok) {
                setIsNotSubmitted(true);
            }
            else {
                setIsSubmitted(true);
                setFormData({});
                router.push('/thankyou');
            }
        }
        setInvalidFormFields(invalidFieldsInSubmittedData)
        setloading(false);
    }


    function UpdateFormData(val, fieldName){
        const newFormData = { ...formData}
        newFormData[fieldName] = val;
        setFormData(newFormData)
    }
    return (
        <div className="w-11/12 sm:w-9/12 lg:w-7/12 my-12 m-auto">
            <h1 className="text-2xl mb-6 font-black">{props.heading}</h1>
            <p className="text-lg mb-6">{props.description || ""}</p>
            <form onSubmit={handleSubmit}>
                <ReCAPTCHA
                    size="invisible"
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT}
                    ref={recaptchaRef}
                />
                {
                    props.formQuestions?.map((ele, index) => {
                        const label = <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={ele.name}>
                            {ele.question || `Question ${index + 1}`} {ele.optional ? "": "*"}
                        </label>
                        let field = <div>Undefined</div>;
                        let validation = <></>;
                        if(ele.type == "text" || ele.type == "email"){
                            field = (
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id={ele.name}
                                    required={!ele.optional || false}
                                    type={ele.type}
                                    onChange={(e) => UpdateFormData(e.target.value, ele.name)}
                                    value={formData[ele.name] || ""}
                                    placeholder={ele.placeholder || ""}
                                />
                            );
                            validation = <>{invalidFormFields[ele.name] && <p className="text-red-500 text-xs italic">Please enter a valid value.</p>}</>;
                        }
                        else if (ele.type == "bigtext") {
                            field = (
                                <textarea
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id={ele.name}
                                    required={!ele.optional || false}
                                    onChange={(e) => UpdateFormData(e.target.value, ele.name)}
                                    value={formData[ele.name] || ""}
                                    placeholder={ele.placeholder || ""}
                                />
                            );
                            validation = <>{invalidFormFields[ele.name] && <p className="text-red-500 text-xs italic">Please enter a valid value.</p>}</>;
                        }
                        else if (ele.type == "boolean") {
                            field = (
                                <div className="inline-flex items-center">
                                    <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">No</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            value={formData[ele.name] || false}
                                            className="sr-only peer"
                                            onChange={(e) => { }}
                                            onClick={(e) => UpdateFormData(!(formData[ele.name] || false), ele.name)}
                                            checked={formData[ele.name] || false} 
                                        />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                                    </label>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</span>
                                </div>
                            );
                        }
                        return <div className="flex flex-wrap -mx-3 mb-6" key={index}>
                            <div className="w-full px-3">
                                {label}
                                {field}
                                {validation}
                            </div>
                        </div>
                    })
                }
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                        <button 
                            className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="submit"
                        >
                            {props.doneButtonText || "Done!"}
                        </button>
                    </div>
                    {loading && <ThreeDots color={'rgb(45 212 191)'} loading={loading} size={100} />}
                    <div className="md:w-2/3"></div>
                </div>
                {invalidFormFields && Object.keys(invalidFormFields).length > 0 && <p className="text-red-500 text-xs italic my-6">Some fields above are invalid. Please correct them and re-submit.</p>}
                {isNotSubmitted && <p className="text-red-500 text-xs italic my-6">Unable to save your survey. Please try again later.</p>}
                {isSubmitted && <p className="text-green-500 text-xs italic my-6">Your response is saved.</p>}
            </form>
        </div>
    );
};

export default SurveyForm;